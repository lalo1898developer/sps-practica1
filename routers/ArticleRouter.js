// Utilizamos Express y la agregamos a una constante
const express = require('express');

// Definimos una constante llamada router que utilizara la funcion Router de Express
const router = express.Router();

// Importamos la constante que contiene las funciones de nuestro controlador

const { ArticleController } = require('../controllers');

// Declaramos las rutas de nuestros endpoint junto con su funcion correspondiente

/**
 * @swagger
 * /api/sps/helloworld/v1/read:
 *  get:
 *   description: Regresa un Array con todos los articles como objeto
 *   responses:
 *    '200':
 *      description: Petición Exitosa
 *    '400':
 *      description: Error en la petición
 */
router.get('/read', ArticleController.read);

/**
 * @swagger
 * /api/sps/helloworld/v1/create:
 *  post:
 *   description: Agrega un nuevo article al modelo
 *   parameters:
 *     - in: body
 *       id: Id
 *       Title: Titulo
 *       message: Mensaje que contiene, seperado en parrafos
 *       date: Fecha de creacion del articulo
 *       autor: Autor
 *   responses:
 *    '201':
 *      description: Petición Exitosa
 *    '400':
 *      description: Error en la petición
 */
router.post('/create', ArticleController.create);

// Exportamos nuestra constante
module.exports = router;