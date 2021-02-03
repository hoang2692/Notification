const express = require('express')
const router = express();
var multer = require('multer');
const MoviesSingleController = require('../Controllers/moviesSingle');

router.get('/movies/single',MoviesSingleController.getAll)
router.post('/moviesSingle/create',MoviesSingleController.create)
router.get('/movies/Single/one/:id',MoviesSingleController.getOne)
router.post('/single/deleteMany',MoviesSingleController.deleteMany)
router.put('/movies/SIngle/update/:id',MoviesSingleController.update)
router.delete('/moviesSingle/delete/:id',MoviesSingleController.delete)
module.exports = router;