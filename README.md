# iamcscraper
This app get data from pdf idocuments from iamc webpage

The web page is: https://www.iamc.com.ar/

The daily informs is in: https://www.iamc.com.ar/informediario/

Structure of list of link in pdf. Example

"https://iamcmediamanager.prod.ingecloud.com/mediafiles/iamc/2023/4_21/0/11/86/742916.pdf"

cannot determinate de nambe of file in function of day.

To get file from a day you can call a api

`https://www.iamc.com.ar/Contenido/GetConteidoPorAtributos?listaAtributo=[{"Atributo":"CategoriaInforme","AtributoValor":"Diario"},{"Atributo":"Fecha","AtributoValor":"14/04/2023"}]&lista={"IdElemento":11530,"IdElementoPadre":11529,"Visualizacion":"Informe","Titulo":"Informes+Diarios","Ubicacion":3,"AtributoFiltro":"CategoriaInforme","AtributoValorFiltro":"Diario"}`







