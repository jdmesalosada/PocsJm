const express = require('express'); //return a funcion
const app = express(); //return an object

//this function requires two paramters, the path
// and a callback that is going to be executed when the path is called.
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(['1,2,3,4']);
});

//id va a ser el nombre del parametro que vamos a esperar.
app.get('/api/courses/:id', (req, res) => {
     res.send(req.params.id);
});

//si recibimos multiples parametros en la url sería
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

//Con esto primero leemos la variable de ambiente en caso de no existir entonces se toma
//el valor 3000
const port = process.env.PORT || 3000;

//Adicionalmente podemos llamar una funcion cuando nuestro servidor
//este escuchando por el puerto
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
