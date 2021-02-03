const express = require('express')
const router = express();
const MoviesAnimeController = require('../Controllers/moviesAnime');

router.get('/movies/anime',MoviesAnimeController.getAll)
router.get('/movies/anime/one/:id',MoviesAnimeController.getOne)
router.post('/moviesAnime/create',MoviesAnimeController.create)
router.post('/anime/deleteMany',MoviesAnimeController.deleteMany)
router.put('/moviesAnime/update/:id',MoviesAnimeController.update)
router.delete('/moviesAnime/delete/:id',MoviesAnimeController.delete)
module.exports = router;