const express = require('express')
const router = express();
var multer = require('multer');
const MoviesRecommendController = require('../Controllers/moviesRecommend');

router.get('/movies/recommend',MoviesRecommendController.getAll)
router.post('/moviesRecommend/create',MoviesRecommendController.create)
router.get('/movies/Recommend/one/:id',MoviesRecommendController.getOne)
router.post('/recommend/deleteMany',MoviesRecommendController.deleteMany)
router.put('/movies/Recommend/update/:id',MoviesRecommendController.update)
router.delete('/moviesRecommend/delete/:id',MoviesRecommendController.delete)
module.exports = router;