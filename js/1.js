var c=1;
function counter() {
	if(c<=3) {
		var a = document.getElementById("result");
		var b = a.innerHTML; 
		b += "click" + c + "<br />"; 
		a.innerHTML = b;
	}
	if (c == 3) {   
		var g = document.getElementById("counter");   
		g.setAttribute('disabled','disabled'); 
	}
	c++;
}
