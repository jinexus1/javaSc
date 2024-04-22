const user={
  username:"Archit",
  price: 999,
  wecomeMessage: function(){
    console.log(`${this.username}, wecolme to website`)
    console.log(this);
  }
}//this: refers to current context
user.wecomeMessage()//Archit, wecolme to website
user.username="sam"
user.wecomeMessage()//sam, welcome to website
/*
Archit, wecolme to website
{
  username: 'Archit',
  price: 999,
  wecomeMessage: [Function: wecomeMessage]
}
sam, wecolme to website
{
  username: 'sam',
  price: 999,
  wecomeMessage: [Function: wecomeMessage]
}
*/
console.log(this);//{} , in node environment
//WHEN RUNNING THE ABOVE LINE IN BROWSE CONSOLE then
//Window {0: Window, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
//In browser it refers to window object is which is global object 

function three(){
  console.log(this);
}
three()
/*OUTPUT
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  }
}
*/

// function four(){
//   let username="hitesh"
//   console.log(this.username);
// }
// four()//undefined

const chai=()=>{
  console.log(this);
}
chai() 

const addNumebrs=(num1,num2)=>{
  return num1+num2
}
console.log(addNumebrs(2,3));//5

const addNumebrsImplicitly=(num1,num2)=> num1+num2

console.log(addNumebrsImplicitly(3,4));//7

const returnObject=()=> ({username:"Archit"})
console.log(returnObject());//{ username: 'Archit' }

const myArray=[2,3,4,5]

//myArray.forEach(()=>())
