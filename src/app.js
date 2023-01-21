const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

// RUTA
app.use(require('./routes/index.route'));

// ARCHIVO ESTATICO
app.use(express.static(path.join(__dirname,'../public')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname,'../public/404.html'));
})


app.listen(3000, () => {
    console.log('servidor a la espera de conexiones');
})