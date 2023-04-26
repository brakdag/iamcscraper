const Iamc = require("../lib/iamc")
describe("Testeando IAMC library",function(){

it("IACM",function(done){
    let  a = new Iamc();
    a.getUrlInform(2019,4,12,(x)=>{
        console.log(x)
    });
    done()
});

});