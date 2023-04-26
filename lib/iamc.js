const axios = require ("axios");
const fs = require("fs") ;
const PDFParser = require('pdf-parse');


class IAMC{
constructor(){
    this.debug=true
    this.downloadPath = "./data/data.pdf"
    this.urlFile=""  
    this.JSONFile= "./data/data.json"
  }

setUrlFile(url){
    this.urlFile = url
    this.msg(url)
}

msg(text){
  if(this.debug=true)console.log("\x1b[37m  IAMC:MSG> \x1b[32m" + text)
}
getUrlInform(year,month,day,cb){
    if ((month+"").length <2) month="0" + month
    if ((day+"").length <2) day="0" + day
    //console.log(day,month,year)
    let url = `https://www.iamc.com.ar/Contenido/GetConteidoPorAtributos`+
    `?listaAtributo=%5B%7B%22Atributo%22%3A%22CategoriaInforme%22%2C%22`+
    `AtributoValor%22%3A%22Diario%22%7D%2C%7B%22Atributo%22%3A%22`+
    `Fecha%22%2C%22AtributoValor%22%3A%22${day}%2F${month}%2F${year}%22%`+
    `7D%5D&lista=%7B%22IdElemento%22%3A11530%2C%22IdElementoPadre`+
    `%22%3A11529%2C%22Visualizacion%22%3A%22Informe%22%2C%22`+
    `Titulo%22%3A%22Informes+Diarios%22%2C%22Ubicacion%22%3A3%2C%22`+
    `AtributoFiltro%22%3A%22CategoriaInforme%22%2C%22AtributoValorFiltro`+
    `%22%3A%22Diario%22%7D`
    //console.log(url)
    axios.get(url).then(res=>{
        this.setUrlFile(res.data.Items[0].ArchivoUrl)
        this.downloadfile(this.urlFile,x=>{
          cb()
        })
    })
    }

    downloadfile(url,cb){
        axios({
            url: url,
            method: 'GET',
            responseType: 'stream'
          })
            .then(response => {
              response.data.pipe(fs.createWriteStream(this.downloadPath));
              response.data.on("end",()=>{
                this.msg("Archivo descargado")
                
            this.parseFile(x=>{
              fs.writeFileSync(this.JSONFile, JSON.stringify(x));
    
              this.msg(`Tablas Cargadas: ${x.length}`)
              cb(true)
            })
            })
            .catch(error => {
              console.log(error);
            });
    })
  }
    parseFile(cb){   
      
      const extractTablesFromPdf = async (filePath) => {
        const pdfData = await fs.promises.readFile(filePath);
        const pdf = await PDFParser(pdfData);
        const tables = [];
      
        for (const page of pdf.text.split('\n\n')) {
          const rows = page.split('\n').map(row => row.split(/\s+/));
          const table = [];
      
          for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const nextRow = rows[i + 1];
      
            if (nextRow && nextRow[0] === '') {
              // Combine rows that belong to the same table
              for (let j = 0; j < row.length; j++) {
                table[j] = table[j] ? table[j] + ' ' + row[j] : row[j];
              }
            } else if (row[0] !== '') {
              // Add a new row to the table
              table.push(row);
            }
          }
      
          if (table.length > 0) {
            tables.push(table);
          }
        }
      
        return tables;
      };
      
      // Ejemplo de uso
      extractTablesFromPdf(this.downloadPath)
        .then(tables => {
          cb(tables);
        })
        .catch(error => {
          console.error(error);
        });
      
    }




}
module.exports = IAMC