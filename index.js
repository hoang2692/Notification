const express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.jdpe7.mongodb.net/ChatsApp?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true })
        .then(db => console.log("Connect Success"));
const newapp = express();
const port =process.env.PORT || 5000;
var CustomerRoute = require('./Api/Routers/customerRoute')
newapp.use(bodyParser.json());
newapp.use(bodyParser.urlencoded({ extended: true }));
newapp.use(express.static('public'));
newapp.use('/', CustomerRoute)
newapp.listen(port, () =>console.log("Hello " + port))