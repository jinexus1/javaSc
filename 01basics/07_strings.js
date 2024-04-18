const name="Archit"
const repoCount=50
console.log(name+repoCount+"Value");//outdated

console.log(`Hello my name is {name} and my repo count is {repoCount}`);//String Interpollation
const gamename=new String("jinxeus")
console.log(gamename[0]);//j
console.log(gamename.__proto__);//for viewing object"{}"
console.log(gamename.length);//7
console.log(gamename.toUpperCase());//JINXEUS

const newString=gamename.substring(0,4);//jinx

const anotherString=gamename.slice(-8,4);
console.log(anotherString);//jinx

const newStringOne="   jin   "
console.log(newStringOne.trim());

const url="https://jinexus.com//archit%20pandey"//https://jinexus.com//archit-pandey

console.log(url.replace('%20','-'));

console.log(url.includes('jin'));//true

let urlList=url.split('//');//split returns array object
console.log(typeof(urlList));//object
console.log(urlList);//[ 'https:', 'jinexus.com', 'archit%20pandey' ]
