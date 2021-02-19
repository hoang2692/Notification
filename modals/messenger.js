var mongoose = require('mongoose')


var MessengesSchema = new mongoose.Schema({
    roomID: {type: String, required: true},
    senderEmail: {type: String, required: true},
    recieverEmail: {type: String, required: true},
    _txtmsg: {type: String, required: true},
    time: {type: Date, default: Date.now},
},{ versionKey: false });

var Messenge = mongoose.model('Messenge',MessengesSchema, 'Messenges');

module.exports = Messenge;