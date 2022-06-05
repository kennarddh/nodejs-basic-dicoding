// TODO 1
const { EventEmitter } = require('events')

const birthdayEventListener = name => {
	console.log(`Happy birthday ${name}!`)
}

// TODO 2
const myEmitrer = new EventEmitter()

// TODO 3
myEmitrer.addListener('birthday', birthdayEventListener)

// TODO 4
myEmitrer.emit('birthday', 'John')
