const express = require('express')
const router = express();
var multer = require('multer');
const MoviesTheatherController = require('../Controllers/moviesTheather');

router.get('/movies/theather',MoviesTheatherController.getAll)
router.get('/movies/theather/one/:id',MoviesTheatherController.getOne)
router.post('/moviesTheather/create',MoviesTheatherController.create)
router.post('/theather/deleteMany',MoviesTheatherController.deleteMany)
router.put('/moviesTheather/update/:id',MoviesTheatherController.update)
router.delete('/moviesTheather/delete/:id',MoviesTheatherController.deleteOne)


module.exports = router;