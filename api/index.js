// Usamos la dependencias instaladas y las guardamos en una constante 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Definimos una constante para utilizar las funciones de Express y definimos el puerto donde se levantara el servidor
const api = express();
const PORT = process.env.PORT || 3000;

// Damos el formato y descripcion basica a nuestra documentacion de swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'SPS Practica #1 API',
            description: 'Es una de 2 practicas para buscar la oportunidad de entrar como becario con la consultora SPS\n\n ***\n ## Descripción:\n **Desarrollar una API REST en ExpressJS y colocarla en un contenedor en mi caso seleccione Docker.**\n * La api contiene un objeto Article con los campos: id, title, message, date y autor; existiran 2 endpoints, uno para traer la lista completa de articulos y otra para crear un nuevo articulo',
            contact: {
                name: 'Eduardo Rodriguez Ricardez'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ['./routers/ArticleRouter.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Definimos los siguientes middlewares para utilizar morgan y evitar que nos salgan los warnings en consola de Express.
// Agregamos el middleware que definira la ruta principal de nuestros endpoints
// Agregamos el middleware de cors para permitir peticiones (en nuestro caso no definiremos permisos de IP)
// Agregamos el middieware de swagger para definir que ruta es la que tendra esta documentacion
api.use(cors());
api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ express: true }));
api.use('/api/sps/helloworld/v1/', require('../routers'));
api.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Establecemos el endpoint para probar que el servidor responsa y un mensaje para indentificar esta acción
api.get('/', (req, res) => res.send('Esta viva y funcionando!'));

// Exportamos nuestras constantes de api y PORT para que se utilicen en el archivo principal
module.exports = { api, PORT };