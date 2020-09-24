// Importamos nuestro modelo que creamos anteriormente
const { Article } = require('../models');

// Exportmos y definimos los metodos que tendra nuestro servicio
module.exports = {
  read: () => Article,
  create: (body) => Article.push(body)
}; 