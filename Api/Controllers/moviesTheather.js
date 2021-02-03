var moviesTheather = require('../../modals/moviestheather');

try
{
    const MoviesTheatherController = {
        getAll: async (req,res) =>{
            var movie = await moviesTheather.find()
            res.json(movie)
        },
        getOne: async (req,res) =>{
            var movie = await moviesTheather.findById({_id: req.params.id})
            res.json(movie)
        },
        deleteOne: async (req,res) =>{
            var deleteProduct = await moviesTheather.findByIdAndDelete({_id: req.params.id})
            res.json(deleteProduct)
        },
        // getOne: async (req,res) =>{
        //     var profileProducts = await Product.findById({_id: req.params.id})
        //     res.json(profileProducts)
        // },
        create: async (req,res) =>{
            var newMovie = await moviesTheather.create(req.body);
            res.json(newMovie);
        },
        update: async (req,res) =>{
            const movie = await moviesTheather.findById({_id: req.params.id})
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
                const data = await moviesTheather.findByIdAndDelete({_id: listDelete[i]})
                Deleted.push(data)
            }
            res.status(200).send(Deleted)
        },
    }
    module.exports = MoviesTheatherController;
}
catch (error){
    res.status(400).send(error)
}