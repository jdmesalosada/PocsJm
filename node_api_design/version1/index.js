const express = require('express'); //return a funcion
const app = express(); //return an object
const Joi = require('joi');

//Habilita el parseo de objetos json en express,
//por defecto esta caracteristica viene apagada por lo que usando 
//la siguient linea la prendemos.
app.use(express.json());

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

//this function requires two paramters, the path
// and a callback that is going to be executed when the path is called.
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

//id va a ser el nombre del parametro que vamos a esperar.
/*app.get('/api/courses/:id', (req, res) => {
     res.send(req.params.id);
});*/


app.get('/api/courses/:id', (req, res) => {
  //La funcion parseInt es una funcion global de javascript.
  const courseId = req.params.id;
  const course = courses.find(c => c.id === parseInt(req.params.id));
  //if there is not any course we return: 404
  if (!course) res.status(404).send(`The course with the given ID ${courseId} was not found.`);
  res.send(course);
});

//si recibimos multiples parametros en la url sería
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

//Para obteneer los parametros query es decir los que van despues de ?
// usamos req.query
//http://localhost:3000/api/books/1/2?sortBy=name
app.get('/api/books/:year/:month', (req, res) => {
  res.send(req.query);
});

//Con esto primero leemos la variable de ambiente en caso de no existir entonces se toma
//el valor 3000
const port = process.env.PORT || 3000;

//Adicionalmente podemos llamar una funcion cuando nuestro servidor
//este escuchando por el puerto
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});


/******############# */
//POST #
/******############## */

app.post('/api/courses', (req, res) => {

  if(!req.body.name || req.body.name.length < 3)
  {
    //Si no viene el nombre o su longitud es menor a 3 devolvemos un 400 que es la convención
    //de Bad request
    res.status(400).send('Name is required and should be mimum 3 characters');
    return;
  }
  
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  }
  courses.push(course);
  res.send(course) ;

});