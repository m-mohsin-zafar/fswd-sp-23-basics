
const mongoose = require('mongoose');
const {log} = require('mercedlogger');
// const {EventEmitter} =  require('events');

DATABASE_URL = 'mongodb://localhost:27017/nodeDemo';

// 1. Connect With MongoDB using the URL
mongoose.connect = mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
// 2. Handle different states/events
mongoose.connection
    .on("open", () => log.green("DATABASE STATE", "Connection Open"))
    .on("close", () => log.magenta("DATABASE STATE", "Connection Close"))
    .on("error", (error) => log.red("DATABASE STATE", error))

// EXPORT CONNECTION
module.exports = mongoose

// Show implementation of EventEmitter

// class ABC extends EventEmitter {
//     function A(){
//         this.emit('func A');
//     }
// }
//
// let abc = new ABC();
// abc.on('func A', ()=> {
//
// })
