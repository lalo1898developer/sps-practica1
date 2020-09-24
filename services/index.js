// Importanmos los metodos a una constante de nuestro Servicio
const ArticleService = require('./ArticleService');

// Exportamos esta constante para que sean usados los metodos que contiene por el controlador
module.exports = {
    ArticleService,
};