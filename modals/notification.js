var mongoose = require('mongoose')


var tokenSchema = new mongoose.Schema({
    deviceName: String,
    token: String,
},{ versionKey: false });

var Token = mongoose.model('Token',tokenSchema, 'Tokens');

module.exports = Token;