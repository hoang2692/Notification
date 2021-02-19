var admin = require ('firebase-admin');
var serviceAccount = require ('./key.json');
var Token = require('../../../modals/notification')
admin.initializeApp ({
    credential: admin.credential.cert (serviceAccount),
  });
let Notification = {
  getToken: async (req,res) =>{
    const findToken = await Token.findOne({token: req.body.token})
    if(!findToken){
      const newDevice = await Token.create(req.body);
      res.json(newDevice)
    }
    else
    {
      res.status(200).send({messenger: 'Device is valid'})
    }
  },
  sendToAll: async (req, res) => {
    var registrationTokens = req.body.token;
    var message = {
        notification: {
            body: req.body.text,
          },
          android: {
            notification: {
                channelId: 'channel-id',
                sound: 'sound.mp3'
            }
          },
      tokens: registrationTokens,
    };
    
    // Send a message to the device corresponding to the provided
    // registration token.
    admin
      .messaging ()
      .sendMulticast(message)
      .then (response => {
        // Response is a message ID string.
        res.status(200).send('Success')
      })
      .catch (error => {
        console.log ('Error sending message:', error);
      });
  },
};

module.exports = Notification;
