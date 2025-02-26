## Building Distributed Systems with Node.js

[Building Distributed Systems with Node.js.](https://dev.to/sfundomhlungu/building-distributed-systems-with-nodejs-1b12?preview=1a39684209d6e69fc0c27c3dd7b12c327363fb8b9c9b509c535257f0b935c78e729d816164a8f3c5a49faeaa9cafcf8a8a2f7dd7894757f1c3016ec1)


### Getting Started 


1. start the broker

```bash 
node MessageBroker.js
```

2. Create queue and seed with messages 

```bash
node ./publisher/send.js
```

3. Consume messages from the queue

```bash
node ./worker/consumer.js
```