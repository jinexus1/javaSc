//dates starts from 1 January,1970,UTC
//tc39 has made a propasal to ECMAScript to make Temopral to make it as global object
let myDate= new Date()
console.log(myDate);//2024-04-18T17:31:51.035Z(as of now)
let dateString=myDate.toString();
console.log(dateString);//Thu Apr 18 2024 23:03:27 GMT+0530 (India Standard Time)
console.log(myDate.toISOString())//2024-04-18T17:35:43.136Z,However, .toISOString()'s behavior can vary. In firefox this outputs a string "Invalid Date" but in chrome it raises an exception.
console.log(myDate.getTime());
console.log(myDate.toJSON())//2024-04-18T17:35:43.136Z,if you have an invalid date, .toJSON() will output null
console.log(myDate.getUTCFullYear())//2024
console.log(myDate.getUTCMonth())//3
//better to toJSON than toISOString
console.log(typeof myDate);//object

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
//Month start from zero in JavaScript(quite weird)
//Hour is in 24 hrs format
let yetAnotherDate=new Date(2023,1,19,5,30)
console.log(yetAnotherDate.toLocaleString())//19/2/2023, 5:30:00 am
let yetAnotherDate2=new Date(2023,1,19,5,60)
console.log(yetAnotherDate2.toLocaleString())//19/2/2023, 6:00:00 am


let myTimeStamp=Date.now()
console.log(myTimeStamp)//answer in milliseconds
console.log(Math.floor(myTimeStamp/1000));//convert it into seconds

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//+1 is added because in Js month start from 0
console.log(newDate.getDay());

newDate.toLocaleString('default',{
  weekday:"long",
  dateStyle:"long"
})
/*
An object that contains one or more properties that specify comparison options.
Converts a date and time to a string by using the current or specified locale.
Note: these options are not supported in all browsers at the time of writing this.
*/ 
console.log(newDate);//2024-04-18T18:52:12.049Z
