// Utilizamos Express y la agregamos a una constante
const express = require('express');

// Definimos una constante llamada router que utilizara la funcion Router de Express
const router = express.Router();

// Importamos la constante que contiene las funciones de nuestro controlador
const { ArticleController } = require('../controllers');

// Declaramos las rutas de nuestros endpoint junto con su funcion correspondiente
router.get('/read', ArticleController.read);
router.post('/create', ArticleController.create);

// Exportamos nuestra constante
module.exports = router;