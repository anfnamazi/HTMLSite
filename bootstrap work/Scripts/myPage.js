/*if for login page*/
var a = document.getElementById('inputEmail3');var b=document.getElementById('inputPassword3');function sub(){if (a.value==''){alert('please enter email');document.getElementById('myform').action='myPage.html';}if(b.value==''){alert('enter password');document.getElementById('myform').action='myPage.html';}}
/*dropdown btn sidebar*/
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}


/*button pager*/

var slideIndex = 1;
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