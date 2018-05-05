console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id){
    setTimeout(()=> {
        console.log('reading a user from database');
        return {id:id, gitHubUsername: 'juli'}
    }, 2000) 
}