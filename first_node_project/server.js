const EventEmitter = require('events');

const myEmitter = new EventEmitter();

let name = 'Robogarden';

//we are listenning to an event named test
myEmitter.on('concert', () => {
  // console.log('an error occurred!');
  // console.log('Email sent to the support team');
});

// test is the anme of the event that occurs
myEmitter.emit('concert');

function sayHello(){
  console.log('Hello World');
}

module.exports.name = name;
module.exports.sayHello = sayHello;

console.log(module)