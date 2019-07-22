
/*button pager*/

var slideIndex = 3;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}



function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "inline-block";  
	x[i].className = x[i].className.replace(" green-btn", "");
  }
  x[slideIndex-1].className =x[slideIndex-1].className+ " green-btn";
  
}