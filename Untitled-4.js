var suhucelcius = prompt("Suhu dalam Celcius");
var suhufahrenheit = suhucelcius*9/5+32;

console.log("Suhu Dalam Fahrenheit = " + suhufahrenheit);
document.getElementById("hasil").innerHTML = "Suhu Dalam Fahrenheit adalah = " + suhufahrenheit;