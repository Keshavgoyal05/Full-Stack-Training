const { Console } = require('console');
const { getEventListeners } = require('events');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var listner1 = function listner1(){
    console.log("Listner 1 is executed");
}
var listner2 = function listner2(){
    console.log("Listner 2 is executed");
}

eventEmitter.on('event1',listner1)
eventEmitter.on('event1',listner2);
console.log("event name associated with eventEmitter object : "+ eventEmitter.eventNames());
eventEmitter.emit('event1');
console.log("\n");

eventEmitter.removeAllListeners('event1');

eventEmitter.addListener('myevent',listner1)
eventEmitter.addListener('myevent',listner2);
console.log("event name associated with eventEmitter object : "+ eventEmitter.eventNames());
eventEmitter.emit('myevent');
console.log("listeners count listening to myevent is : "+eventEmitter.listenerCount('myevent'));
console.log(getEventListeners(eventEmitter,'myevent'));
//console.log("List of Listners associated with myevent: "+ eventEmitter.listeners('myevent')+ "\n");

console.log("Removing listner 2 from myevent .....");
eventEmitter.removeListener('myevent',listner2);
eventEmitter.emit('myevent');
console.log("listeners count listening to myevent after removing listner2 is : "+eventEmitter.listenerCount('myevent'));
console.log(getEventListeners(eventEmitter,'myevent'));
//console.log("List of Listners associated with myevent after removing listner2 : "+ eventEmitter.listeners('myevent'));



