const express = require('express')
const router = express();
const notificationControllers = require('../Controllers/notification/notification');
router.post('/sendAll',notificationControllers.sendToAll)
router.post('/recived/token',notificationControllers.getToken)
module.exports = router;