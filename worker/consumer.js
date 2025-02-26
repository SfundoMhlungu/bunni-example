import Bunnymq from "bunnimq-driver"


const bunny = new Bunnymq({port: 3000, host:"localhost", username: "john", password: "doeses"})
bunny.QueueDeclare({name: "myqueue2", config: undefined}, (rres)=> {console.log("queu creation:", rres)})
let consumed = 0;
bunny.Consume("myqueue2",  async(msg) => {
    console.log('processing', msg)
    consumed++
    const [id, time] = msg.split("-")
    console.log(id, time)
    await new Promise((resolve) => setTimeout(resolve, time));
    console.log("consumed: ", consumed)
    bunny.Ack((isSuccess) => console.log("free to take more work", isSuccess))
})