const movieCarosels = require('../../modals/moviescarosel');
var moviesCarosel = require('../../modals/moviescarosel');

try
{
    const MoviesCaroselController = {
        getAll: async (req,res) =>{
            var movie = await moviesCarosel.find()
            res.json(movie)
        },
        getOne: async (req,res) =>{
            var profileProducts = await movieCarosels.findById({_id: req.params.id})
            res.json(profileProducts)
        },
        create: async (req,res) =>{
            var newMovie = await moviesCarosel.create(req.body);
            res.json(newMovie);
        },
        delete: async (req,res) =>{
            var deleteProduct = await moviesCarosel.findByIdAndDelete({_id: req.params.id})
            res.json(deleteProduct)
        },
        update: async (req,res) =>{
            const movie = await moviesCarosel.findById({_id: req.params.id})
            movie.title = req.body.title
            movie.imageUrl = req.body.imageUrl
            movie.rating = req.body.rating
            movie.year = req.body.year
            movie.duration = req.body.duration
            movie.trailer = req.body.trailer
            movie.movie = req.body.movie
            movie.description = req.body.description
            await movie.save()
            res.json(movie)
        },
        deleteMany: async(req,res) =>{
            const listDelete = req.body.list
            const Deleted = []
            for (var i = 0; i < listDelete.length; i++)
            {
                const data = await moviesCarosel.findByIdAndDelete({_id: listDelete[i]})
                Deleted.push(data)
            }
            res.status(200).send(Deleted)
        },
    }
    module.exports = MoviesCaroselController;
}
catch (error){
    res.status(400).send(error)
}