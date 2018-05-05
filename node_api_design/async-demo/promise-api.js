const p = Promise.resolve({id:1});
p.then(result => console.log(result));

const pReject = Promise.reject(new Error('error message'));
pReject.catch(err => console.log(err.message));
