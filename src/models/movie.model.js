const mongoose = require('MONGOOSE');
const { Schema } = mongoose

//recibe como parametro un objeto que será nuestra estructura de datos
const MovieSchema = new Schema({
    _id: Object,
    name: String,
    duration: Number,
    country: String,
    direction: String,
    gender: String,
    year: Number,
    distribution:String,
    description:String,
    imgUrl:String
}, {versionKey:false} )


const MovieModel = mongoose.model('movies', MovieSchema );

module.exports = MovieModel;