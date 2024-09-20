//crossCuttingConcerns bir new folder Logging ise bu concerns üzerine new folder yapınca / şeklinde geçmiş oldu 
// aslında oda yeni bir klasör demek loggingin içinede loglama için logger.js i açtık

export class BaseLogger{
    log(data){
        console.log("default/base logger : " + data)
        
    }
    
}
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to  Elastic" + data)
    }
}
export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to  Mongo" + data)
    }
}



















