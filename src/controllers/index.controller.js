const controller = {};
const connection = require('../utils/connection');
const MovieModel = require('../models/movie.model');

//moatrar

controller.index = async (req, res) => {
    try{
        await connection();
        const allMovies = await MovieModel.find()
        const movies = allMovies.map(element => {
            return{
                _id:element._id,
                name: element.name,
                duration: element.duration,
                country: element.country,
                direction: element.direction,
                gender: element.gender,
                year: element.year,
                distri: element.distribution,
                description: element.description,
                img: element.imgUrl
            }
        });
        console.log(movies)
        res.render("index",{movies});
    } catch(err){
        console.error(err);
    }
}

// edición
controller.edit = async (req, res) => {
    try {
        await connection();
        const id = req.body.id_edit
        const name = req.body.edit_name
        const duration = req.body.edit_duration
        const country = req.body.edit_country
        const direction = req.body.edit_direction
        const gender = req.body.edit_gender
        const year = req.body.edit_year
        const distri = req.body.edit_distri
        const description = req.body.edit_description
        await MovieModel.findByIdAndUpdate(id, {name, duration, country, direction, gender, year, distri, description});
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error al editar la pelicula'
        });
    }
};
// eliminar
controller.delete = (req, res) => {
    const id = req.params._id; // obtener el id de la pelicula a eliminar desde la URL
    MovieModel.findByIdAndRemove(id, (error, movies) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al eliminar la pelicula'
            });
        }
        res.redirect('/');
        console.log(movies)
    });
};
module.exports = controller;