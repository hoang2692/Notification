const express = require('express')
const router = express();
var multer = require('multer');
const MoviesCaroselController = require('../Controllers/moviesCarosel');

router.get('/movies/carosel',MoviesCaroselController.getAll)
router.post('/moviesCarosel/create',MoviesCaroselController.create)
router.get('/movies/Carosel/one/:id',MoviesCaroselController.getOne)
router.post('/carosel/deleteMany',MoviesCaroselController.deleteMany)
router.put('/movies/Carosel/update/:id',MoviesCaroselController.update)
router.delete('/moviesCarosel/delete/:id',MoviesCaroselController.delete)
module.exports = router;