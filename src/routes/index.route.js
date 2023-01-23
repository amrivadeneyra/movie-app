const express = require('express');
const router = express.Router();

const controller = require('../controllers/index.controller');

router.get('/', controller.index);

//editar pelicula
router.get('/edit', controller.edit);

//Borrar una pelicula
//router.get('/delete/:id', controller.delete)
router.get('/delete/:_id', controller.delete)

//exportamos tdo lo que esta en router
module.exports = router;