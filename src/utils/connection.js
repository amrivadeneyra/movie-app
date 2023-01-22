const mongoose = require('MONGOOSE')

const host = 'mongodb://127.0.0.1:27017/movieApp';

module.exports = () => mongoose.connect(host);