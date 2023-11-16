const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const rutasLectura = require('./api/leer/rutas');
const rutasEscritura = require('./api/agregar/rutas');
const rutasActualizar = require('./api/actualizar/rutas')
const rutasEliminar = require('./api/actualizar/rutas')



app.use(rutasLectura);
app.use(rutasEscritura);
app.use(rutasActualizar);
app.use(rutasEliminar);

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
    console.log(`Servidor Express en ejecución en el puerto ${puerto}`);
});
