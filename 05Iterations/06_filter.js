// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values=coding.forEach((element) => {
//   console.log(element);
//   return element
// });
// console.log(values);//undefined, it didn't return anything 
const myNums=[1,2,3,4,5,6,7,8,9,10]


const newNums=myNums.filter((num)=> num>4 )//implicity return 
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

const newNums2=myNums.filter((num)=>{//explicit return 
  return num>4//remember
})
console.log(newNums2);//[ 5, 6, 7, 8, 9, 10 ]

const newNums3=[]
myNums.forEach((nums)=>{
  if(nums>4){
    newNums3.push(nums)
  }
})
console.log(newNums3);//[ 5, 6, 7, 8, 9, 10 ]
//since for each didn't return anything so we store the values in an array

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
//return books with genre="History"
let userBooks=books.filter((bk)=>{
  return bk.genre=="History"
})


console.log(userBooks);
/*OUTPUT
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/
