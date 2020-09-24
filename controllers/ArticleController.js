// Importa la constante que contiene los metodos de los servicios para el articulo
const { ArticleService } = require('../service');

// Exportamos y definimos los metodos asincronos del controlador
module.exports = {
    read: async (req, res) => {
      try {
        const articles = await ArticleService.read();
        res.status(200).json(articles);
      } catch (err) {
        res.status(400).json(err);
      }
    },
    create: async (req, res) => {
        try {
          const article = await ArticleService.create(req.body);
          res.status(201).json(article);
        } catch (err) {
          res.status(400).json(err);
        }
      },
  };