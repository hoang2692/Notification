const express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server)
const port =process.env.PORT || 5000;
server.listen(port, () =>console.log("Hello " + port))
const CustomerRoute = require('./Api/Routers/customerRoute')
require('./middleware/socket')(io)
mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.jdpe7.mongodb.net/ChatsApp?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true })
        .then(db => console.log("Connect Success"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(CustomerRoute)