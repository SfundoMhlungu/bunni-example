import Bunnymq from "bunnimq-driver"


const bunny = new Bunnymq({port: 3000, host:"localhost", username: "sk", password: "mypassword"})
bunny.QueueDeclare({name: "myqueue2", config:  {
    QueueExpiry: 60,
    MessageExpiry: 20,
    AckExpiry: 10,
    Durable: true,
    noAck: false,
}}, (rres)=> {console.log("queu creation:", rres)})

for(let i = 0; i < 100; i++){
    // work simulation
    // 1 
    // 100
    // 500
    bunny.Publish(`${Math.random()}-${i+100*8}`, (res)=> {console.log(res)})
}