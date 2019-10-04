function calculateInsurance() {
var n = document.getElementById("fullname").value;
var c = document.getElementById("country").selectedIndex;
var age = document.getElementById("age").value;
var a = parseFloat(age)
var h_p = document.getElementById("horse_power").value;
var hp = parseFloat(h_p)
var res = document.getElementById("result")

try {
	if (n == '') throw "'Your name' cannot be empty."
	if (isNaN(n) == false) throw "'Your name' cannot contain numbers."
	if (isNaN(a)) throw "'Age' is either empty or contains invalid input."
	if (isNaN(hp)) throw "'Horsepower' is either empty or contains invalid input."
}
catch(err) {
	alert("The field " + err)
}

if (isNaN(n) == true && c == 0) {
	resval = hp * 100 / a + 50;
	res.innerHTML = n + " , your insurance costs " + resval.toFixed(2) + "€."
}

else if (isNaN(n) == true && c == 1) {
	resval = hp * 120 / a + 100;
	res.innerHTML = n + " , your insurance costs " + resval.toFixed(2) + "€."
}

else if (isNaN(n) == true && c == 2) {
	resval = hp * 150 / (a+3) + 50;
	res.innerHTML = n + " , your insurance costs " + resval.toFixed(2) + "€."
}

}