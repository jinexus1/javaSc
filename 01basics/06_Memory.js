//Stack, Heap
//Stack=>Primitive
//Heap=>Non Primitive
let myName="archit_pandey"
let anotherName=myName
anotherName="Eshu_pandey"
console.log(myName);//archit_pandey
console.log(anothername);//Eshu_pandey

let user={
  email:"user@google.com",
  name:"ABC",
}
let newUser=user//reference to original "user" was passed to newUser

newUser.email="ap2929470@gmail.com"

console.log(user.email);//ap2929470@gmail.com
console.log(newUser.email);//ap2929470@gmail.com
