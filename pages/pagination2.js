
/*button pager*/

var slideIndex=2;
showDivs(slideIndex);

function plusDivs(n) {
	  showDivs(slideIndex += n);
	  if(n==1){a.href="#"}
	  if(n==-1){alert('-1')}
}



function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "inline-block";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-cyan", "");
  }
  x[slideIndex-1].style.display = "inline-block";  
  dots[slideIndex-1].className += " w3-cyan";
}