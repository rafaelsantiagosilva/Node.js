const events = require('events'); // Módulo de eventos
var eventEmitter = new events.EventEmitter();

// Criando uma função que vai ser disparada ao ocorrer um evento
var myEventHandler = () => {
     console.log('I hear a scream!');
}

// Colocando uma escuta à função
eventEmitter.on('scream', myEventHandler);

// Disparando o evento
eventEmitter.emit('scream');