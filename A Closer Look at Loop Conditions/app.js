var upper = 100;
var radonNumber = getRandomNumber(upper);
var guess;
var stepCounts = 0;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== radonNumber) {
  guess = getRandomNumber(upper);
  stepCounts += 1;


}
document.write('The random number is :' + radonNumber);
document.write('It takes '+ stepCounts + 'to guess right');