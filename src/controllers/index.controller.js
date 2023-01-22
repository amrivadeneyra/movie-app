const controller = {};
const connection = require('../utils/connection');
const MovieModel = require('../models/movie.model');

controller.index = async (req, res) => {
    try{
        await connection();
        const allMovies = await MovieModel.find()
        //const year =`Direction: ${allMovies.year}`
        const movies = allMovies.map(element => {
            return{
                img: element.imgUrl,
                name: element.name,
                duration: element.duration,
                country: element.country,
                direction: element.direction,
                gender: element.gender,
                year: element.year
            }
        });
        console.log(movies)
        res.render("index",{movies});
    } catch(err){
        console.error(err);
    }
}

module.exports = controller;