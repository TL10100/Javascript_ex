var randomNumber = getRandomNumber(6);
var guess;
var guessCount = 0;
var guessRight = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}
do {
  guess = prompt('I am thinking of a number between 1 and 6,what is it?');
  guessCount += 1;
  if ( parseInt(guess) === randomNumber) {
    guessRight = true;
  }
} while ( !guessRight)
document.write('<h1>You guessed the right number!</h1>');
document.write('It takes you ' + guessCount + ' steps to get the right number: ' + randomNumber);