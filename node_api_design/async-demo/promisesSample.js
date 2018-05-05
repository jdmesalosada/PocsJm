const p = new Promise((resolve, reject) => {
    //Kick off some async work like reading a database.
    //aca despues de la ejecucion podemos obtener un valor o un error
    //La promesa va a ser consumida por lo tanto debemos pasarle al consumidor
    //ya sea el error o el valor.
    //Usamos resolve para mandar el valor al consumidor de la promesa.
    setTimeout(()=> {
        //resolve(1); 
        reject(new Error('my message'));
    }, 2000);
    
});

p.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));
;