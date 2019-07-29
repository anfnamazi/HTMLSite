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