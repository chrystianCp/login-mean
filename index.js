const express = require('express');
const cors = require('cors');
require('dotenv').config();


//crear el servidor/aplicacion de express
const app = express();

//directorio publico
app.use( express.static('public'));

//CORS  
app.use( cors());

//lectura y parseo del body
app.use( express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));




app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});


