var ran1 = Math.floor(Math.random() * 6) + 1;
var player1 = document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+ran1+".png");
var ran2 = Math.floor(Math.random() * 6) + 1;
var player2 = document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+ran2+".png");

if (ran1 > ran2) {
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if (ran2 > ran1) {
  document.querySelector("h1").innerHTML="player 2 wins!🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
