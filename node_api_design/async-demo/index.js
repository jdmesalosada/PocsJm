console.log('Before');
setTimeout(()=> {
    console.log('reading a user from database');
}, 2000) //despues de dos segundos el código de la función que se recibio como 
//parámetro va a ser ejecutada,es decir se imprimirá: 'reading a user from database'
console.log('After');

// la función setTimeout es asincrona, así que uno en un comportamiento asincrono
//esperaria que se imprimira Before, se esperara dos segundos y se imprimiera 'reading a user from database'
//y después After, pero el comportamiento es diferente, debido a la asicronia.
// basicamente cuando se entra a seTimeout se programa la tarea para que sea ejecutada en el futuro en este caso
// dos segundos después.
