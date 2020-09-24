// Importamos las constantes del archivo index que se encuentra en la carpeta ./api
const { api, PORT } = require('./api');

// Ponemos a escuchar al servidor en el puerto definido y mostramos en consola un mensaje para conocer esto
api.listen(PORT, () => console.log(`Escuchando en ${PORT}`));