const express = require('express')
const router = express();
const FavoriteMovieController = require('../Controllers/favoriteMovies');

router.get('/favoritemovies',FavoriteMovieController.getAll)
router.post('/favoritemovies/create/:id',FavoriteMovieController.create)
module.exports = router;