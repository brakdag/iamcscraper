const Iamc = require("../lib/iamc")

describe("Testeando IAMC library",function(){

it("IACM",function(done){
    let  a = new Iamc();
    a.getUrlInform(2023,4,25,(x)=>{
        done()   
    });
    
});

});