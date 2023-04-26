const Iamc = require("../lib/iamc")
describe("Testeando IAMC library",function(){

it("IACM",function(done){
    let  a = new Iamc();
    a.getNumberDay(2023,4,24,(x)=>{
        console.log(x)
        done();
    });
});

it("url",function(done){
    let  a = new Iamc();
    a.getUrlInform(2023,4,14,(x)=>{
        console.log(x)
        done();
    });
});



});