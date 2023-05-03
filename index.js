//for Dice img1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6.
//console.log(randomNumber1);

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

/*var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
*/

//for Dice img2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6.

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = " Match Draw";
}
