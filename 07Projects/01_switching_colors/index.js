const buttons=document.querySelectorAll('.button')
console.log(buttons);
const body=document.querySelector("body")
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    const color=e.target.id
    //using if 
    // if(e.target.id==='grey'){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==='yellow'){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==='blue'){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==='white'){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==='black'){
    //   body.style.backgroundColor=e.target.id
    //   body.style.color='white'
    // }
    //USING SWITCH CASE
    switch(color){
      case 'grey':
        body.style.backgroundColor=color
        break;
      case 'white':
        body.style.backgroundColor=color
        break;
      case 'blue':
        body.style.backgroundColor=color
        break;
      case 'black':
        body.style.backgroundColor=color
        body.style.color='white'
        break;
      case 'blue':
        body.style.backgroundColor=color
        break;
      default:
        body.style.backgroundColor='white'
        body.style.color='black'
    }
  })
})
