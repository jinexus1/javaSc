//Singleton: When the object is created using constructor, then it is known as 
//singleton
//Object Literals
const mySym=Symbol("key1")
const mySym2=Symbol("key2")
const JsUSer={
  name:"Jin",
  "full name":"Jinexus",
  mySym:"mykey1",//treating mySym as key(so string type) not as a symbol 
  [mySym2]:"myKey2",// correct way of reference a symbol
  age:21,
  location:"Jaipur",
  email:"jin@gmail.com",
  isLoggedIn: true,
}//way 1
//Object.create()//way 2
//The Object.create() static method creates a new object, using an existing object 
//as the prototype of the newly created object.
//This is creation of object using constructor

console.log(JsUSer.email);//way 1 jin@gmail.com
console.log(JsUSer["email"]);//way 2 jin@gmail.com
//In Js the key is considered as string by default
//If we are try to access "full name", now we can't access using '.'
console.log(JsUSer["full name"]);
console.log(typeof JsUSer.mySym);//string
console.log(typeof JsUSer.mySym2);//undefined
console.log(JsUSer[mySym2]);//myKey2

JsUSer.email="jinexus123@gmail.com"//changing a value
console.log("Before freeze,",JsUSer);
//Object.freeze(JsUSer)//now no value will be changed
/* 
Before freeze, {
  name: 'Jin',
  'full name': 'Jinexus',
  mySym: 'mykey1',
  age: 21,
  location: 'Jaipur',
  email: 'jinexus123@gmail.com',
  isLoggedIn: true,
  [Symbol(key2)]: 'myKey2'
}*/
JsUSer.email="jinexus12334@gmail.com"
console.log("After Freeze,",JsUSer);
/*After Freeze, {
  name: 'Jin',
  'full name': 'Jinexus',
  mySym: 'mykey1',
  age: 21,
  location: 'Jaipur',
  email: 'jinexus123@gmail.com',
  isLoggedIn: true,
  [Symbol(key2)]: 'myKey2'
}  */

JsUSer.greeting=()=>{
  console.log("Hello JS user")
}
console.log(JsUSer.greeting);//[Function]
console.log(JsUSer.greeting());
/*
Hello JS user
undefined
 */
