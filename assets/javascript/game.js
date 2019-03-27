//create variables for wins, losses, computer's pick with no current value, guesses left for user, array of your guesses for the current game, and letters of alphabet.
var wins = 0;
var losses = 0;
var computerPick = computerPick;
var guessesLeft = 10;
var yourGuesses = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//generate computerPick by randomly choosing a value in the letters array.
var randomIndex = Math.floor(Math.random() * letters.length);
// computer starts game by choosing random value from the letters array and assigning it to the variable computerPick. console.log(computerPick) to see which letter computer chose in the console.
function randomGuess() {
  computerPick = letters[Math.floor(Math.random() * letters.length)];
  console.log(computerPick);
}
//tell browser whenever a key is released to run this function
document.onkeyup = function (event) {
  // store key pressed in variable yourPick.
  var yourPick = event.key;
  // compare yourPick to computerPick and determine if they match. If so add to wins, reset value of guessesLeft to 10 and clear array for yourGuesses.
  if (yourPick === computerPick) {
    wins++;
    guessesLeft = 10;
    yourGuesses = [];
  }
  // computer picks a random letter. if yourPick does not equal computerPick subtract 1 from guessesLeft, add your incorrect pick to the array yourGuesses.
  randomGuess();
  if (yourPick !== computerPick) {
    guessesLeft--;
    yourGuesses.push(yourPick);
    
  }
  // if guessesLeft goes all the way down to 0, add 1 to losses, clear the values for previous guesses in the array yourGuesses, and set guessesLeft back to 10.
  if (guessesLeft === 0) {
    losses++;
    yourGuesses = [];
    guessesLeft = 10;

  }
//display stats on document
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("yourGuesses").innerHTML = yourGuesses;




}