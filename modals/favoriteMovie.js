var mongoose = require('mongoose')


var favoriteMovieSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    rating: String,
    year: String,
    duration: String,
    trailer: String,
    movie: String,
    owner: {
        type: mongoose.Schema.Types.String,
        ref: "Customer"
    }
},{ versionKey: false });

var FavoriteMovie = mongoose.model('FavoriteMovie',favoriteMovieSchema, 'FavoriteMovies');

module.exports = FavoriteMovie;