const express = require('express'); //return a funcion
const app = express(); //return an object

//this function requires two paramters, the path
// and a callback that is going to be executed when the path is called.
app.get('/', (req, res) = > {
  res.send('Hello World');
})
;

//Adicionalmente podemos llamar una funcion cuando nuestro servidor
//este escuchando por el puerto
app.listen(3000, () = > {
  console.log('Listening on port 3000 ...')
});
