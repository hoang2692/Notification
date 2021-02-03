const express = require('express')
const router = express();
var multer = require('multer');
const MoviesNewsController = require('../Controllers/moviesNews');

router.get('/movies/news',MoviesNewsController.getAll)
router.get('/movies/news/one/:id',MoviesNewsController.getOne)
router.post('/moviesNews/create',MoviesNewsController.create)
router.post('/new/deleteMany',MoviesNewsController.deleteMany)
router.put('/moviesNews/update/:id',MoviesNewsController.update)
router.delete('/moviesNews/delete/:id',MoviesNewsController.delete)
module.exports = router;