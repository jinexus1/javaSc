const score=400
console.log(score);//400
const balance=new Number(100)
console.log(balance);//[Number: 100]
console.log(balance.toString().length);
const str=balance.toString()
console.log(typeof(balance));//object
console.log(typeof str);//string

console.log(balance.toFixed(2));//decimal value upto two precision place

const otherNumber=23.8969
console.log(otherNumber.toPrecision());//23.8969 Returns the natural logarithm (base e) of a number.
//range 1-21
const yetAnothernumber=123.456
console.log(typeof yetAnothernumber.toPrecision());//string  return a string type
console.log(yetAnothernumber.toPrecision(2));//1.2e+2 string  return a string type

const hundreds=1000000
console.log(hundreds.toLocaleString());//1,000,000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000
/*

+++++++++++++++++++++++++++MathS+++++++++++++++++++++++++++

*/
console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.abs(4));//4
console.log(Math.round(4.5));//5
console.log(Math.round(-4.5));//-4
console.log(Math.ceil(4.3));//5
console.log(Math.ceil(-4.3));//-4
console.log(Math.floor(4.3));//4
console.log(Math.floor(-4.3));//5

console.log(Math.random());//always in range between 0 to 1
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//print random number between min to max
