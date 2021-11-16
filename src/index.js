const { ServiceBroker } = require("moleculer");
const mathSer = require("./models/math.service.config.js")


 const broker = new ServiceBroker();

broker.createService(mathSer);


    const begin = async () =>{
        try{
            
            await  broker.start()
            const snc =  await broker.call("math.add", { a: 5, b: 3 })
          console.log(snc)
        }catch(err){
            console.log(err.message)
        }
      
    }
    

    begin();
