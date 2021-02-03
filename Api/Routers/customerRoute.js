const express = require('express')
const router = express();
const customerControllers = require('../Controllers/customerController');
const auth = require('../../middleware/auth')

router.get('/customers',customerControllers.getAll)

router.get('/customer/profile/:id',customerControllers.getOne);

router.post('/customer/create',customerControllers.create)

router.post('/customer/dangnhap',customerControllers.login);

router.post('/customer/logout',auth,customerControllers.logout);

router.delete('/customer/delete/:id',customerControllers.delete);

router.delete('/customer/delete/movie/:idCustomer/:idMovie',customerControllers.deleteMovie);

router.post('/customer/logoutall',auth,customerControllers.logoutall);

router.put('/customer/changepass/:id', customerControllers.changePass);

module.exports = router;