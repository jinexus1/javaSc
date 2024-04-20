//JavaScript array-copy operations create shallow copies.
//Shallow Copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
//So the changes made in the copy will reflect in original object.
//Deep Copy:A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
//So the changes made in the copy will not reflect in original object.

const myArr=[0,1,2,3,4]//array declaration
myArr.push(6,7,8)
console.log(myArr);//[0,1,2,3,4,5,6,7,8]
const myHeros=["Shiva","Krishna"]

const mtArr2=new Array(1,2,3,4)
console.log(myArr[1]);//1

myArr.unshift(9);
console.log(myArr);//[9, 0, 1, 2, 3,4, 6, 7, 8]
myArr.shift()
console.log(myArr);//[0, 1, 2, 3,4, 6, 7, 8]

console.log(myArr.includes(0));//true, return boolean value
console.log(myArr.indexOf(9));//return the index of the number, if the number is 
//found then will return the index(based on Zero based indexing)
//else will return '-1'

let newArr=myArr.join()

console.log(myArr);//[0,1,2,3,4,6,7,8]
console.log(typeof myArr);//object

console.log(newArr);//0,1,2,3,4,6,7,8
console.log(typeof newArr);//string
//join convert the array object to string
console.log("Original array ",myArr);
/*
Original array [
  0, 1, 2, 3,
  4, 6, 7, 8
]
*/
let myn1=myArr.slice(1,3);
console.log("Slice:",myn1);//Slice: [ 1, 2 ]
console.log("Original array after slice ",myArr);
/*
Original array after slice  [
  0, 1, 2, 3,
  4, 6, 7, 8
]
*/
//Slice: return the array from start index to end index(excluding)
let myn2=myArr.splice(1,3)
console.log("Splice:",myn2);//Splice: [ 1, 2, 3 ]
console.log("Original array after splice ",myArr);
//Original array after splice  [ 0, 4, 6, 7, 8 ]
//Splice: return the part of array from start to end index(both inclusive) such 
//that the spliced part is no more a part of original array 
