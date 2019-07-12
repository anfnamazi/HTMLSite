var arry = [] ;

function get() {
	for (var i=0 ; i<6; i++) {
		var a = prompt("plesen enter number");
		if(a !=""){
			arry[i] = Number(a);
		}
		else{
		arry[i]= null;
		}	

	}
			var d = document.getElementById("btn_get");
			d.setAttribute('disabled','disabled');
			var f = document.getElementById("btn_show");
			f.removeAttribute('disabled');
	
}
function show() {
	if(arry.length ==0) {
		alert("you most enter number first");
		return;
		//تابع رو متوقف میکنه return
	}
	var m = '<p>your number</p>'
	var sum = 0;
	var count = 0;
	for(var j=0 ; j<arry.length	; j++) {
		if(arry[j]!=null) {
		sum += arry[j];
		m += '<il>'+ "*"+arry[j]+'</il><br />'
		count++;}
	}
	m += '<ul></ul>'
				var g = document.getElementById("result");
		
		h = m+"sum:"+sum+"<br />"+"count:"+count+'<br />';
		 g.innerHTML=h;
}