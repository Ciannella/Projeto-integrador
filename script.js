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
// ua função 





function checar(){
  const lamp = document.getElementById('lamp');     // lampada

  const lampNeutral = document.getElementById('lampNeutral');
  const force = document.getElementById('force');
  const lampReturn = document.getElementById('lampReturn');
  const neutralForce= document.getElementById('neutralForce');

  if (neutralForce.checked && lampNeutral.checked){
    lamp.style.backgroundImage = 'url("acesa.png")'

  } else {
    lamp.style.backgroundImage = 'url("apagada.png")'
  }

  console.log(neutralForce.checked)
  console.log(lampNeutral.checked)


} 

