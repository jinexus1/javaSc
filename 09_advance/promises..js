//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its 
//resulting value.
//Examples: cryptography,encryption etc
//Three States
//pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
const promiseOne=new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('Async task is complete')
    resolve()
  },1000)
})//promise created
promiseOne.then(function(){
  console.log("Promise Consumed");
})//promise consumed
//another way to create promise
new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async Task  2");
    resolve();
  },1000)
}).then(function(){
  console.log("Async 2 resolved");
})
//promise three
const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"jinxus",email:"ap2929470@gmail.com"})//passing value to an obj
  },1000)
})
promiseThree.then(function(user){
  console.log(user);//{ username: 'jinxus', email: 'ap2929470@gmail.com' }
})

const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true
    if(!error){
      resolve({username:"jinexus",password:"123"})
    }else{
      reject("ERROR: SOmething went wrong")
    }
  },1000)
})
const username=promiseFour.then((user)=>{
  console.log(user);
  return 
  user.username
})