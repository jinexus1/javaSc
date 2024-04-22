const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )
//using function keyword
coding.forEach( (item) => {
    console.log(item);
} )
//using arrow function

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
//OR
console.log("*****");
coding.forEach(function printMe(item){
  console.log(item);
})

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
