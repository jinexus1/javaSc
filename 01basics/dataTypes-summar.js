//The way we keep data in memory and store it, datatpes have been classified 
//into two types
//Primitive DataTypes:-
/*
whenever we copy these datatypes into another variables, the copy of data is passed not the reference to the original data types
7 types: String, Number, Boolean, null, undefined, symbol(used to make a variable unique), BigInt
*/
const score=100//number
const scoreValue=100.3//number
const isLoggedIn=true//boolean
const outsideEvent= null//null
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);//false
console.log(id===anotherId);//false

const bigNumber=123434567568584583782735878675956963568467896799
console.log(typeof(bigNumber));//number
console.log(bigNumber);//1.2343456756858458e+47
const bigNumber1=123434567568584583782735878675956963568467896799n
console.log(typeof(bigNumber1));//bigint
console.log(bigNumber1);//123434567568584583782735878675956963568467896799n
//'n' as the postfix tell JavaScript to treat the number as bigint
//Reference(Non- Primitive)
//Array, Object, Functions

const gods=["shiva","ram","krishna"]
let godsObject={//function in form a variable
  name:"shiva",
  age:"inifinite",
}
 const myFunction=function(){
  console.log("Hello, this is function using a 'function()'");
 }
 console.log(myFunction);//myfunction
 //Dataype of arrays and object is known as function and of function
 //is known as "object function"
