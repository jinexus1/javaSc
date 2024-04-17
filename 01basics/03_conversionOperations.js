let score="33abc"

console.log(typeof(score));//string

let valueInNumber=Number(score);
console.log(typeof valueInNumber)//number
console.log(valueInNumber);//NaN(not a number)
let score2=null

console.log(typeof(score2));//object

let valueInNumber1=Number(score);
console.log(typeof valueInNumber1)//number
console.log(valueInNumber1);//0

let score1=undefined

console.log(typeof(score1));//string

let valueInNumber2=Number(score1);
console.log(typeof valueInNumber2)//string
console.log(valueInNumber2);//NaN(not a number)


//"33"=>33
//"33abc"=>NaN
// true=> 1 and false=> 0

let loggedIn=-1100.0
let booleanIsLoggedIn=Boolean(loggedIn)
console.log(booleanIsLoggedIn);
//1=>true and 0=>false
//""=>false
//"jin"=>true
//any real value except 0 gives true in case of numeric value

let someValue=3
let negValue=-someValue
console.log(negValue);//-3
console.log(2+2);//add
console.log(2-2);//sub
console.log(2*2);//multiply
console.log(2/2);//division
console.log(2**3);//exponent
console.log(2%3);//mod

let str1="jin"
let str2="exus"
let str3= str1+str2
console.log(str3);
//OR
console.log(str1+str2);

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
console.log(true);//true
console.log(+true);//1
console.log(+"");//0


let num1,num2,num3
num1=num2=num3=2+2
console.table([num1,num2,num3])

let x = 3;
const y = x++;//the increment operator increments and returns the value before incrementing.
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;//the increment operator increments and returns the value after incrementing.
// x2 is 4n; y2 is 3n
