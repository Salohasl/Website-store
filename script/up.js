function formUp(){
  const buttonClick = document.getElementById('buttonClick');
  const containerFormUp = document.getElementById('containerFormUp');
  
  buttonClick.addEventListener('click', ()=>{
    containerFormUp.style.display = 'flex';
  })

  containerFormUp.addEventListener('click', (event)=>{
    if(event.target == containerFormUp){
      containerFormUp.style.display = 'none';
    }
  })
} formUp();
  /* Для всплывающего окна */ 
  let menuBtn = document.querySelector('.menuBtn');
  let menu = document.querySelector('nav');
  menuBtn.addEventListener('click', () =>{
  menuBtn.classList.toggle('active');
  menu.classList.toggle('popUp');
  });


