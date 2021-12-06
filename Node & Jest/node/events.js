const { getEventListeners } = require('events');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var listner1 = function listner1(){
    console.log("Listner 1 is executed");
}
var listner2 = function listner2(){
    console.log("Listner 2 is executed");
}

eventEmitter.on('myevent',listner1)
eventEmitter.addListener('myevent',listner2);
eventEmitter.emit('myevent');
console.log(getEventListeners(eventEmitter,'myevent'));
eventEmitter.removeListener('myevent',listner1);
console.log("listener count for myevent : "+eventEmitter.listenerCount('myevent'));

