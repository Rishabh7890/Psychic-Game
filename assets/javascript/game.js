//create variables for wins, losses, computerPick with no current value, guessesLeft for user, array of yourGuesses for the current game, and letters of alphabet.
var wins = 0;
var losses = 0;
var computerPick;
var guessesLeft = 10;
var yourGuesses = [];
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
//generate randomIndex by getting random decimal between 0 and 1 from math.random and multiply by the length of the letters array. Math.floor will round the decimal point down.
var randomIndex = Math.floor(Math.random() * letters.length);
// start game using newGame function, choosing random value from the letters array and assigning it to the variable computerPick. console.log(computerPick) to see which letter computer chose in the console.
function newGame() {
  computerPick = letters[Math.floor(Math.random() * letters.length)];
  console.log(computerPick);
  guessesLeft = 10;
  yourGuesses = [];
}
//tell browser whenever a key is released to run this function
document.onkeyup = function(event) {
  // store key pressed in variable yourPick.
  var yourPick = event.key;
  // compare yourPick to computerPick and determine if they match. If so, add to wins and then run newGame() function. Else condition: if yourPick does not equal computerPick subtract 1 from guessesLeft and push yourPick to yourGuesses array.
  if (yourPick === computerPick) {
    wins++;
    newGame();
  } else {
    guessesLeft--;
    yourGuesses.push(yourPick);
  }
  // if guessesLeft goes all the way down to 0, add 1 to losses and run newGame() function.
  if (guessesLeft === 0) {
    losses++;
    newGame();
  }
  //display stats on document
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("yourGuesses").innerHTML = yourGuesses;
};
//RUN newGame() AT THE END OF THE CODE

newGame();
