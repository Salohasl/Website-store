
const product = document.querySelector('.product');


function catalogLink(){
    document.getElementById('blockLink').style.display = 'flex';
    document.getElementById('btnLink').style.backgroundColor = '#00296b';
    document.getElementById('btnClassis').style.backgroundColor = '#FF6E28';
    document.getElementById('pag-cont').style.display = 'none';
    document.getElementById('act').classList.toggle('active');
    const letter = document.querySelectorAll('.letter');
    for(let el of letter){
      if(el.getAttribute('id') == 'charA'){
        el.classList.add('active');
      }else{
        el.classList.remove('active');
      }
    }
    product.classList.add('nonActive');
}


function catalogClassic(){
    location. reload();
    document.getElementById('blockLink').style.display = 'none';
    document.getElementById('btnLink').style.backgroundColor = '#FF6E28';
    document.getElementById('btnClassis').style.backgroundColor = '#00296b';
    product.classList.remove('nonActive');
}


function colorSelection(){
  const linkColor = document.querySelectorAll('.nav-link');
  for(let i = 0; i < linkColor.length; i++){
    linkColor[i].addEventListener('click', function(){
      for(let j = 0; j < linkColor.length; j++){
        linkColor[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }
}colorSelection();


function letterA(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charA'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}

function letterB(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charB'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}

function letterW(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charW'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}

function letterG(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charG'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}

function letterI(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charI'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterK(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charK'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterL(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charL'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterM(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charM'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterN(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charN'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterO(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charO'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterP(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charP'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterS(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charS'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterT(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charT'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterU(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charU'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterF(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charF'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterH(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charH'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}
function letterCH(){
  product.classList.add('nonActive');
  const letter = document.querySelectorAll('.letter');
  for(let el of letter){
    if(el.getAttribute('id') == 'charCH'){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  }
}


function formUpCatalog(){
    const buttonClickProduct = document.querySelectorAll('#buttonClickProduct');
    const containerFormUp = document.getElementById('containerFormUp');
    const message = document.getElementById('message');
    buttonClickProduct.forEach(elem =>{
        elem.addEventListener('click', ()=>{
            containerFormUp.style.display = 'flex';
            message.value = elem.value;
            message.style.color = 'green'
          })
    })
  
    containerFormUp.addEventListener('click', (event)=>{
      if(event.target == containerFormUp){
        containerFormUp.style.display = 'none';
        message.value = '';
      }
    })
  } formUpCatalog();




