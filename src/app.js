const express = require('express');
const app = express();
const path = require('path');

// configurar Pug como motor de plantillas
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

app.get("/src/views", (req, res) => {
    res.render("index");
});

// RUTA
app.use(require('./routes/index.route'));

app.listen(3000, () => {
    console.log('servidor a la espera de conexiones');
})