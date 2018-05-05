/*CALLBACK HELL
console.log('Before');
getUser(1, (user) => {
   console.log('User', user);
    getRepositories(user.gitHubUsername, (repositories) => {
       getCommits(repo, (commits) => {
       });
    });

}); */

console.log('Before');
getUser(1, getRepositories);

console.log('After');

//Una vez obtenemos el usuario
//vamos a obtener los repositorios de dicho usuario.
function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits); //La funcion getCommits no lleva () porque es una referencia.
}
/*Esto al principio puede resultar un poco confuso ya que tenemos una funcion llamada
getRepositories y dentro del cuerpo de la función también tenemos una función llamaga getRepositores
pero estas dos funciones son diferentes, ya que la primera toma un parametro llamado user, y
la segunda dos parametros uno es el nombre del usuario y la segunda una referencia 
a la funcion getCommits, que es un callback.


*/

// una vez tenemos los repositorio vamos a obtener los commits de dicho repo.
function getCommits(repos){
    getCommits(repo, displayCommits);
}

//Una vez obtenemos los commits los imprimimos en la consola.
function displayCommits(commits){
console.log(commits);
}

function getUser(id, callback){
    setTimeout(()=> {
        console.log('reading a user from database');
        callback({id:id, gitHubUsername: 'juli'}); //le pasamos al callback como parametro el resultado de la lectura de la DB
    }, 2000) 
}

function getRepositories(username, callback){
    setTimeout(()=> {
        console.log('Calling GitHub API... ');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback){
    setTimeout(()=>{
        console.log('Calling Github API....');
        callback(['commit1'])
    }, 2000);
}