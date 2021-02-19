var mongoose = require('mongoose')

var ChatsSchema = new mongoose.Schema({
    roomID: {type: String, required: true},
    senderEmail: {type: String, required: true},
    recieverEmail: {type: String, required: true},
    time: {type: Date, default: Date.now},
},{ versionKey: false });

var Chat = mongoose.model('Chat',ChatsSchema, 'Chats');

module.exports = Chat;