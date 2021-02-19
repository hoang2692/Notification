const User = require('../modals/customer')
const {addUser, loadMessages} = require('./misc')
const Message = require('../modals/messenger');


module.exports = (io) =>{
    io.on("connection", function(socket){
        console.log("co nguoi vua ket noi " + socket.id);
        socket.on("getUsers", ()=>{
            console.log("getuser")
            User.find({}, (err, users) =>{
                io.emit("getAllUsers", users)
            })

            loadMessages(socket);

            socket.on("startUniqueChat", ({recieverEmail,senderEmail, recieverId}, callback) => {
                addUser({recieverEmail,senderEmail,recieverId}, socket);
            })

            socket.on("jointTwoUser", ({roomID},cb) =>{
                socket.join(roomID);
                cb({roomID});
            })

            socket.on("sendToUser", (data) =>{
                socket.broadcast.to(data.roomID).emit("dispatchMsg", {...data})

                const {
                    roomID,
                    senderEmail,
                    recieverEmail,
                    composeMsg: {time, _txtmsg},
                } = data;

                new Message({
                    roomID,
                    senderEmail,
                    recieverEmail,
                    time,
                    _txtmsg: _txtmsg,
                }).save();
            })
        })

    })
}