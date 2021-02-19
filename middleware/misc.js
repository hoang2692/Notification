const Chat = require('../modals/Chats');
const { v4: uuidV4} = require('uuid');
const Message = require('../modals/messenger');

const addUser = ({recieverEmail,senderEmail,recieverId}, socket) =>{
    if(!recieverEmail || !senderEmail)
    {
        return {error: "Users are required"}
    }

    const user = { recieverEmail, senderEmail };
    Chat.aggregate([
        {
        $match: {
            recieverEmail,
            senderEmail
        }
    }
    ]).then((chat) => {
        if(chat.length > 0){
            socket.emit("openChat", { ...chat[0]});
        } else {
            Chat.aggregate([
                {
                    $match: {
                        recieverEmail: senderEmail,
                        senderEmail: recieverEmail,
                    }
                }
            ]).then((lastAttempt)=>{
                if(lastAttempt.length > 0) {
                    socket.emit("openChat", { ...lastAttempt[0] })
                } else {
                    const newChat = {
                        ...user,
                        roomID: uuidV4()
                    }

                    socket.emit("openChat", newChat);
                    new Chat(newChat).save();
                }
            })
        }
    })
}

const loadMessages = (socket) =>{
    socket.on("sendtMsgs", ({myEmail}, cb) => {
        Message.find({senderEmail: myEmail}).then((msgs) =>{
            if(!msgs) return cb(null);
            cb(msgs);
        });
    });

    socket.on("recievedMsgs", ({myEmail}, cb) => {
        Message.find({recieverEmail: myEmail}).then((msgs) =>{
            if(!msgs) return cb(null);
            return cb(msgs);
        });
    });
}

module.exports = {addUser, loadMessages};