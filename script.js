// CAROUSEL 
var slideIndex = 1;
showSlides(slideIndex);

//  next and preview
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// Eletric simulator 



function checar() {
  const interacao = document.getElementById('int')
  const lamp = document.getElementById('lamp');     // lampada
//check boxxes 
  const lampNeutral = document.getElementById('lampNeutral'); // fio neutro que vai na lampada
  const force = document.getElementById('force'); // fio fase 
  const lampReturn = document.getElementById('lampReturn'); // fio de retorno da lampada 
  const neutralForce = document.getElementById('neutralForce'); // fio neutro caixa de força 
  const forceCircuitBreaker = document.getElementById('forceCircuitBreaker') // fio do dijuntor 
  const returnCircuitBreaker = document.getElementById('returnCircuitBreaker') // retorno do dijuntor 
//divs que simulam os fios 
  const fiofase = document.getElementById('fioFase') // div que faz o fio fase 
  const fioNeutro = document.getElementById('fioNeutro') // div que faz o fio neutro 
  const fioNeutroC = document.getElementById('fioNeutroC') // div fio neutro 
  const fioRetorno = document.getElementById('fioRetorno') // div que faz o fio retorno
  const fioRetornoC = document.getElementById('fioRetornoC') // div continução do fio retorno 
  const interruptor = document.getElementById('interruptor') // interruptor 


  if (force.checked && forceCircuitBreaker.checked) {
    fiofase.style = 'border-top: 4px solid black; border-left: 4px solid black; border-right: 4px solid black;'
  }   else { 
    fiofase.style = ''
  } if (neutralForce.checked && lampNeutral.checked){
    fioNeutro.style = 'border-left: 4px solid blue; border-top: 4px solid blue;'
    fioNeutroC.style = ' border-right: 4px solid blue;'
  } else {
    fioNeutroC.style = ''
    fioNeutro.style = ''
  } if (lampReturn.checked && returnCircuitBreaker.checked){
    fioRetorno.style = 'border-top: 4px solid burlywood; border-right: 4px solid burlywood;'
    fioRetornoC.style = ' border-left: 4px solid burlywood;'
  } else {
    fioRetornoC.style = ''
    fioRetorno.style = ''
  } if(force.checked && forceCircuitBreaker.checked && neutralForce.checked && lampNeutral.checked && lampReturn.checked && returnCircuitBreaker.checked){
    lamp.style.backgroundImage = 'url("acesa.png")'
    interruptor.style.backgroundImage = 'url("interruptorright.png")'
    
    interacao.innerHTML += '<div> PARABÉNS, você conseguiu </div> '
    

  } else{
  lamp.style.backgroundImage = 'url("apagada.png")'
  interruptor.style.backgroundImage = 'url("interruptorleft.png")'
  interacao.innerText = ''
  }


}

