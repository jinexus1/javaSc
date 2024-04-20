function sayABC(){
  console.log("A");
console.log("b");
console.log("c");
console.log("d");
console.log("e");
console.log("f");
}


// function addNumebrs(num1,num2){//function parameters
//   console.log(num1+num2);
// }

function addNumebrs(num1,num2){//function parameters
  return num1+num2
}
addNumebrs(2,3)//function arguments
//storing the addition is result variable
const result=addNumebrs(3,4)
console.log(result);//7
console.log(typeof addNumebrs(3,4));//number

function loginUserMessage(username){
  // if (username===undefined){
  //   console.log("Please enter a username");
  //   return
  // }
  //OR
  if(!username){
    console.log("Please enter a username");
  //   return
  }
  return `${username} just logged in`
}
console.log(loginUserMessage("Archit"));
//when use '...' operator in function then know as rest operator
//Otherwise it is called spread operator

function calculateCarPrice(...num1){//rest operator
  return num1
}
console.log(calculateCarPrice(200,400,5000))//Array, [ 200, 400, 5000 ]

const User={
  username:"archti",
  price:199
}
function handleObject(anyObject){
  console.log(`Username is ${anyObject.usename} and price is ${anyObject.price}`);
}
handleObject(User)//Username is undefined and price is 199
s
