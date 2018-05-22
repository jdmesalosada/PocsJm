const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

require('./startup/logging')();//lo ponemos primero en caso de que se presente un error cargando los otros modulos.
require('./startup/routes')(app);
require('./startup/db')();


//Ejecutar para la creacion de la variable
//para la generacion de la firma digital: export vidly_jwtPrivateKey=mySecureKey
if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined');
  //El codigo 0 indica que algo fue satisfactorio.
  //Diferente de 0 que algo salio mal.
  process.exit(1);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));