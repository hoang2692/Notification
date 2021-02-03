var moviesAnime = require('../../modals/moviesAnime');

try
{
    const MoviesAnimeController = {
        getAll: async (req,res) =>{
            var movie = await moviesAnime.find()
            res.json(movie)
        },
        getOne: async (req,res) =>{
            var profileProducts = await moviesAnime.findById({_id: req.params.id})
            res.json(profileProducts)
        },
        create: async (req,res) =>{
            var newMovie = await moviesAnime.create(req.body);
            res.json(newMovie);
        },
        delete: async (req,res) =>{
            var deleteProduct = await moviesAnime.findByIdAndDelete({_id: req.params.id})
            res.json(deleteProduct)
        },
        update: async (req,res) =>{
            const movie = await moviesAnime.findById({_id: req.params.id})
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
                const data = await moviesAnime.findByIdAndDelete({_id: listDelete[i]})
                Deleted.push(data)
            }
            res.status(200).send(Deleted)
        },
    }
    module.exports = MoviesAnimeController;
}
catch (error){
    res.status(400).send(error)
}