function simple_clock(element) {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = h >= 10? h: ('0'+h);
	m = m >= 10? m: ('0'+m);
	s = s >= 10? s: ('0'+s);
	element.innerHTML = h+":"+m+":"+s;
	setTimeout(function(){simple_clock(element)}, 1000);
}

var clock_div =  document.getElementById('clock');
simple_clock(clock_div);