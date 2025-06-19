var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);

if (randomNum1 > randomNum2) {
	document.querySelector("h1").textContent = "👈Player1 wins";
} else if(randomNum2 > randomNum1) {
	document.querySelector("h1").textContent = "👉Player2 wins";
}

document.querySelector(".img1").attributes[1].textContent = "images/dice" + randomNum1 + ".png";


document.querySelector(".img2").attributes[1].textContent = "images/dice" + randomNum2 + ".png";