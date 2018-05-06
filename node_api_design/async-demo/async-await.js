 
 console.log('After');
 function getUser(id){
    return new  Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('reading a user from database');
            resolve({id:id, gitHubUsername: 'juli'});
        }, 2000)
    } );
}


function getCommits(repo){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Calling Github API....');
        resolve(['commit1'])
    }, 2000);
    });
}
function getRepositories(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log('Calling GitHub API... ');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}


//Async and await approach
async function displayCommits(){

    //Aunqye el codigo parezca sincrono se ejecuta de froma asincrona.
    // En este caso el hilo va a buscar el usuario, va a dejar ejecutando la tarea y va a ejecutar otra cosa
    //una vez se resuelva y se obtenga el usuario va a ir a buscar los repo, se va a liberr para ejecutar otra tarea, 
    //una vez se obtenga el repo vuelve acá, y asi sucesivamente.
    try{
const user = await getUser(1);
const repos = await getRepositories(user.gitHubUsername);
const commits = await getCommits(repos[0]);
console.log(commits);
}
catch(err){
    console.log('Error', err);
}
}

displayCommits();

console.log('Before');