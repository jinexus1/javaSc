//reduce js
const myNums=[1,2,3]
myTotal=myNums.reduce(function(acc,currVal){
  return acc+currVal
},0)
console.log(myTotal);//6

//using arrow function
myTotal1=myNums.reduce((acc,currVal)=>{
  return acc+currVal
},0)
console.log(myTotal1);//6


const shoppingCart=[
  {
    itemName:"js course",
    price:999
  },
  {
    itemName:"python course",
    price:999
  },
  {
    itemName:"mobile course",
    price:5999
  },
  {
    itemName:"Data Science course",
    price:12999
  }
]

let priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);
