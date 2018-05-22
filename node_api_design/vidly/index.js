require('express-async-errors');
const winston = require('winston');//logger
require('winston-mongodb');
const config = require('config');
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const users = require('./routes/users');
const rentals = require('./routes/rentals');
const movies = require('./routes/movies');
const auth = require('./routes/auth');
const express = require('express');
const app = express();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const error = require('./middleware/error');

//event emitter.
//Si tenemos una excepcion y esta no estra dentro de un bloque try catch
//esta es atrapada por nuestro event emitter.
//Esto solo funciona con codigo sincrono, es decir no funciona con promesas por ejemplo.
/*process.on('uncaughtException', (ex) => {
  winston.error(ex.message, ex);
  process.exit(1);
});*/

winston.handleExceptions(
  new winston.transports.File({ filename: 'uncaughExceptions.log' })
);

/*process.on('unhandledRejection', (ex) => {
  winston.error(ex.message, ex);
  process.exit(1);
});*/

process.on('unhandledRejection', (ex) => {
  throw ex;
});

winston.add(winston.transports.File, { filename: 'logfile.log' })
winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly' });

//throw new Error('Something failed during startup');

//Ejecutar para la creacion de la variable
//para la generacion de la firma digital: export vidly_jwtPrivateKey=mySecureKey
if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined');
  //El codigo 0 indica que algo fue satisfactorio.
  //Diferente de 0 que algo salio mal.
  process.exit(1);
}

mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);

//La funcion middleware de error tiene que ser definida, después de todas las funciones middleware
app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));