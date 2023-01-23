const express = require('express');
const app = express();
const path = require('path');

const db= require('./utils/connection')

// configurar Pug como motor de plantillas
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//archivo estatico
app.use(express.static('public'))

app.get("/src/views", (req, res) => {
    res.render("index");
});

const movies = require('./routes/index.route')
app.use(movies)

app.listen(3000, () => {
    console.log('servidor a la espera de conexiones http://localhost:3000');
})