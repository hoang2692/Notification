var FavoriteMovie = require('../../modals/favoriteMovie');
const Customer = require('../../modals/customer');
try
{
    const FavoriteMovieController = {
        getAll: async (req,res) =>{
            var fvrMovie = await FavoriteMovie.find().populate('owner')
            res.json(fvrMovie)
        },
        create: async (req,res) =>{
            var customerId = req.params.id;
            var newFvrMovie = new FavoriteMovie(req.body);
            const customer = await Customer.findById({_id: customerId});

            newFvrMovie.owner = customer;
            await newFvrMovie.save();

            customer.favoriteMovie.push(newFvrMovie);

            await customer.save();
            res.json(newFvrMovie);
        },
    }
    module.exports = FavoriteMovieController;
}
catch (error){
    res.status(400).send(error)
}