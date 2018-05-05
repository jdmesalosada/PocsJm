const config = require('config');
const express = require('express'); //return a funcion
const app = express(); //return an object
const Joi = require('joi');
const morgan = require('morgan'); // middlware to log the request
const startupDebugger = require('debug')('app:startup'); //app:startup es un nombre arbitrario que le ponemos a nuestro logger.
// para poderlo usar debeomos crear la env DEBUG y ponerle el valor. Por ejemplo: DEBUG=app:startup
const dbDebugger = require('debug')('app:db');
const courses =  require('./routes/courses');//cargamos el router.
const home = require('./routes/home');

//Custom middleware function
const logger = require('./middleware/logger');
const authenticate = require('./authentication');

//Habilita el parseo de objetos json en express,
//por defecto esta caracteristica viene apagada por lo que usando 
//la siguient linea la prendemos.
app.use(express.json());

console.log(`NODE_ENV: ${process.env.NODE_ENV} `); // Si la variable no esta seteada aca se obtiene undefined
console.log(`app: ${app.get('env')}`); // y aca se obtiene development

app.use(express.urlencoded({extended: true}));// Este middleware bàsicamente toma un request como key=value&key=value
//los parsea y pobla el objeto req.body como un objeto json.

app.use(express.static('public'));// Con este middleware podemos servir contenido estatico
// como imagenes archivos, css, entre otros.

//app.use(morgan());

app.use('/api/courses', courses); //Por cada ruta que empiece con /api/courses use este router.
app.use('/', home);

app.set('view engine', 'pug'); // internamente express carga el pug module ya no es necesario usar require.
app.set('views', './views'); //default


if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled...');
}

dbDebugger('Connected to database');

//CONFIG
console.log('Application name: ' + config.get('name'));
console.log('Mail server: ' +  config.get('mail.host'));
console.log('Mail server: ' +  config.get('mail.password'));


//Next es una referencia a la siguiente middleware function.
// en el pipeline de procesamiendo request.
// Si no ponemos el next la respuesta al usuario se va a colgar, ya que no estamos terminando el ciclo
//de procesamiento. por lo tanto es necesario pasarle la siguiente funcion middleware que se
//encarga de finalizar el ciclo de procesamiento request y response.
app.use(logger);
app.use(authenticate);

  
  //Con esto primero leemos la variable de ambiente en caso de no existir entonces se toma
  //el valor 3000
  const port = process.env.PORT || 3000;
  
  //Adicionalmente podemos llamar una funcion cuando nuestro servidor
  //este escuchando por el puerto
  app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
  });


