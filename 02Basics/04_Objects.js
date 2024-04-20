const metaUser=new Object()//this is single ton obejct
console.log(metaUser);//{}
 const XUser={}//Not a singleton object
 console.log(XUser);//{}
 const regularUser={
  email:"somegmail.com",
  fullname:{
    userName:"some123",
    Name:{
      firstName:"Jin",
      lastName:"exus"
    }

  }
 }
 console.log(regularUser.fullname.Name.firstName);//asscessing object value
//Jin
const obj1={
  1:"a",
  2:"b",
}
const obj2={
  3:"c",
  4:"d"
}
const obj3={obj1,obj2}//way1
const obj4=Object.assign({},obj1,obj2)//way2
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 const obj5={...obj1,...obj2}//way3


 const user=[
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:2,
    email:"a@gmail.com"
  },
  {
    id:3,
    email:"3@gmail.com"
  }
 ]
 user[1].email//accessing user[1].email
 console.log(metaUser);

 console.log(Object.keys(metaUser));
 console.log(Object.values(metaUser))
