function getUser(id){
    return new Promise((resolve, reject) => {
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

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(error => console.log('Error', error.message));