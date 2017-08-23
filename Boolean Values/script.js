var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
    correctGuess = true;
}
if (correctGuess) {    //correctGuess 本来就是一个布尔值，所以不用再加对比符
  document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
// if (false) {
//     document.write('it is true');
// } else {
//     document.write('is is false');
// }