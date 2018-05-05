console.log('Before');
getUser(1, (user) => {
   console.log('User', user);
    getRepositories(user.gitHubUsername, (repositories) => {
        console.log('Repositories', repositories);
    });

}); //Le pasamos como segundo argumento la funcion que va a ser llamada con el 
//argumento que le pasamos, en este caso el objeto user que se retorno de la base de datos.

console.log('After');

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