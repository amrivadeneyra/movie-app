const mongoose = require('mongoose')

connection().catch(err => console.log(err));

async function connection() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
}
module.exports = connection