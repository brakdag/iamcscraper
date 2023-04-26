const axios = require ("axios");
const querystring = require('querystring');
 
class IAMC{
constructor(){
    
    }


getUrlInform(year,month,day,cb){
    if ((month+"").length <2) month="0" + month
    if ((day+"").length <2) day="0" + day
    //console.log(day,month,year)
    let url = `https://www.iamc.com.ar/Contenido/GetConteidoPorAtributos?listaAtributo=%5B%7B%22Atributo%22%3A%22CategoriaInforme%22%2C%22AtributoValor%22%3A%22Diario%22%7D%2C%7B%22Atributo%22%3A%22Fecha%22%2C%22AtributoValor%22%3A%22${day}%2F${month}%2F${year}%22%7D%5D&lista=%7B%22IdElemento%22%3A11530%2C%22IdElementoPadre%22%3A11529%2C%22Visualizacion%22%3A%22Informe%22%2C%22Titulo%22%3A%22Informes+Diarios%22%2C%22Ubicacion%22%3A3%2C%22AtributoFiltro%22%3A%22CategoriaInforme%22%2C%22AtributoValorFiltro%22%3A%22Diario%22%7D`
    //console.log(url)
    axios.get(url).then(res=>cb(res.data.Items[0].ArchivoUrl))
    }

}
module.exports = IAMC