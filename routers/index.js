// Utilizamos Express y la agregamos a una constante
const express = require('express');

// Definimos una constante llamada router que utilizara la funcion Router de Express
const router = express.Router();

// Indicamos que rutas se ocuparan para esta constante y sera atravez de las que definimos en ArticleRouter
router.use(require('./ArticleRouter'));

// Exportamos estas rutas para que sean usadas por la API
module.exports = router;