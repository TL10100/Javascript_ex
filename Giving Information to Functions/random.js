function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}
/*
console.log( getRandomNumber(2) );
console.log( getRandomNumber(1130) );
console.log( getRandomNumber(100) );
*/

function getArea(width,length,unit) {
    var area = width * length;
    return area + ' ' + unit;
}
console.log( getArea(100,20,'m') );