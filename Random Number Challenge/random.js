function getRandomNumber(lower,upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log( getRandomNumber(1,2) );
console.log( getRandomNumber(200,1000) );
console.log( getRandomNumber(250,350) );
console.log( getRandomNumber(550,788) );
console.log( getRandomNumber(990,999) );
