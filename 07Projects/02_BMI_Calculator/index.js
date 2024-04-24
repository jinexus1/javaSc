const from=document.querySelector('form')
from.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  const underWeight=document.querySelector('#lessWeight')
  const normalWeight=document.querySelector('#normalWeight')
  const overWeight=document.querySelector('#overWeight')
  if(height===''||height<0|| isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`
  }
  // results.innerHTML=`${height}`
  else if(weight===''||weight<0|| isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${bmi} </span>`
  
  if(bmi<=18.6){
    results.innerHTML+=`<span>Under Weight </span>`
    underWeight.style.color='blue'
  }
  if(bmi<=24.9 && bmi>18.6){
    results.innerHTML+=`<span>Normal Weight </span>`
    normalWeight.style.color='blue'
  }
  if(bmi>=24.9){
    results.innerHTML+=`<span>Over Weight </span>`
    overWeight.style.color='blue'
  }
}
});
