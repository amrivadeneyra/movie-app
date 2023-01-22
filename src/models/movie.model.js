const mongoose = require('MONGOOSE');
const { object } = require('webidl-conversions');
const { Schema } = mongoose

//recibe como parametro un objeto que será nuestra estructura de datos
const MovieSchema = new Schema({
    imgUrl:String,
    name: String,
    duration: String,
    country: String,
    direction: String,
    gender: String,
    year: String
    
});

const MovieModel = mongoose.model('movies', MovieSchema );

module.exports = MovieModel;