
// if(true){
//   let a=1
//   const b=2
//   var c=3//c should be available within if block but it is available outside
// }
// // console.log(a);
// // console.log(b);
// console.log(c);//3

// var c=300
// if(true){
//   c=30
// }
// console.log(c);//30

let a=300
if(true){
  let a=10//block scope
  const b=20
  console.log("Inner:",a);//10
}
console.log("Outside:",a);//300

// function one(){
//   const name="Archit"
//   function two(){
//     const website="yt"//block level scope
//     console.log(username);
//   }
//   console.log(website)//website not defined
//   two()
// }
// one()
function one(){
  const name="Archit"
  function two(){
    const website="yt"//block level scope
    console.log(name);//Archit
  }
  //console.log(website)
  two()
}
one()

if(true){
  const username="Archit"
  if(username=="Archit"){
    const website=" youtube"
    console.log(username+website);//Archit youtube
  }
}
//++++++++++++++++++INTERESTING
console.log(addone(2));//3, able to access it before 
function addone(num){
  return num+1
}
console.log(addTwo(8));
//ReferenceError: Cannot access 'addTwo' before initialization
//now unable to access before because it is held in a vaiable
const addTwo=function(num){
  return num+2
}
console.log(addone(4));//5
console.log(addTwo(5));//7
