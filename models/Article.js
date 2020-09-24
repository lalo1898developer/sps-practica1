// Definimos el modelo que utilziaremos para nuestra API
const Article = [
    {
        id: 1,
        title: "Titulo 1",
        message: [
            {paragraph: "parrafo1"},
            {paragraph: "parrafo2"},
            {paragraph: "parrafo3"},
            {paragraph: "parrafo4"}
        ],
        date: "01/01/2020",
        autor: "Autor 1"
    },
    {
        id: 2,
        title: "Titulo 2",
        message: [
            {paragraph: "parrafo1"},
            {paragraph: "parrafo2"},
            {paragraph: "parrafo3"},
            {paragraph: "parrafo4"}
        ],
        date: "02/02/2020",
        autor: "Autor 2"
    },
    {
        id: 3,
        title: "Titulo 3",
        message: [
            {paragraph: "parrafo1"},
            {paragraph: "parrafo2"},
            {paragraph: "parrafo3"},
            {paragraph: "parrafo4"}
        ],
        date: "03/03/2020",
        autor: "Autor 3"
    },
    {
        id: 4,
        title: "Titulo 4",
        message: [
            {paragraph: "parrafo1"},
            {paragraph: "parrafo2"},
            {paragraph: "parrafo3"},
            {paragraph: "parrafo4"}
        ],
        date: "04/04/2020",
        autor: "Autor 4"
    },
    {
        id: 5,
        title: "Titulo 5",
        message: [
            {paragraph: "parrafo1"},
            {paragraph: "parrafo2"},
            {paragraph: "parrafo3"},
            {paragraph: "parrafo4"}
        ],
        date: "05/05/2020",
        autor: "Autor 5"
    },
];

// Exportamos este modelo para ser exportado nuevamente por nuestro archivo index
module.exports = Article;