/*猜一个随机数的JS
1-9之间的随机数
 */

//假定猜的初始值是错误的
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 9 ) + 1;
var guess = prompt('1-9之间选一个数，我看你猜的对不对');

/*猜的过程判断
1.）猜对
2.）猜大了
3.）猜小了
 */
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if (parseInt(guess) > randomNumber) {
    var guessLess = prompt('你猜的数字大了，再猜一次吧');
    if (parseInt(guessLess) === randomNumber) {
        correctGuess = true;
    }
} else if (parseInt(guess) < randomNumber) {
    var guessMore = prompt('你猜的数字小了，再猜一次吧');
    if (parseInt(guessMore) === randomNumber) {
        correctGuess = ture;
    }
}

//根据猜的最终值，给出不同的结果
if ( correctGuess ) {
    document.write('<p>真棒！你一次就猜中了这个数字</p>');
} else {
    document.write('<p>抱歉呢，你两次都没有猜中，正确的数字是: ' + randomNumber + '</p>');
}