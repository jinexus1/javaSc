console.log("2">1);//true
console.log("02">1)//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
console.log(null===0);//false(strict equal's, checks the datatype also)
/*
The reason is that '==' and comarision operator('>','<','>=','<=') works differntly, as comparision coverts null to number, treating it as 0.
*/

console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false

/*
AVOID THESE TYPE OF CONVERSIONS
*/
