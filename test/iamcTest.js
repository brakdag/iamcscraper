const Iamc = require("../lib/iamc")
describe("Testeando FCM",function(){

it("FCM",function(done){
    let  a = new Iamc();
    a.getNumberDay(2023,4,24,(x)=>{
        console.log(x)
        done();
    });
     
});

});