const GITHUB_API ="https://github.com/geethanjaliiii"
//user is the promise
const user = fetch(GITHUB_API)//async operation
console.log(user);

 user.then((data)=>console.log(data))

 //promise is immutable
 //promise is an object that representing eventual completion of an async operation
