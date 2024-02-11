function sending(){
    const buttonClickProd = document.getElementById('buttonClickProd');
    const containerFormUp = document.getElementById('containerFormUp');
    const message = document.getElementById('message');
    buttonClickProd.addEventListener('click', ()=>{
      containerFormUp.style.display = 'flex';
      message.value =  buttonClickProd.value;
      message.style.color = 'green'
    })
  
    containerFormUp.addEventListener('click', (event)=>{
      if(event.target == containerFormUp){
        containerFormUp.style.display = 'none';
      }
    })
} sending();