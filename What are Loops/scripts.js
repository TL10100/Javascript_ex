function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;
while ( counter < 1000 ) {
  var raNumber = randomNumber( 899 );
  document.write(raNumber + ' ');
  console.log('now in loop #' + counter);
  counter += 1;
}
