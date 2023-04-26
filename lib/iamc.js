class IAMC{
    static urlBase= "https://iamcmediamanager.prod.ingecloud.com/mediafiles/iamc/"
    constructor(){
    }
    getNumberDay(year,month,day,cb){
        let f = new Date(year,month-1,day)
        f = f/(3600*1000*24)-19468.125+74916+1
        cb(f)
    }

    getUrlInform(year,month,day,cb){
     let url = `${IAMC.urlBase}${year}/${month}_${day}/0/11/86/${this.getNumberDay(year,month,day)}.pdf`
    cb(url)
    }

}

module.exports = IAMC