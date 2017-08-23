var randomNumber = Math.floor(Math.random() * 10) + 1;
var inNumber = prompt('在1-10之间猜一个数字，看你能不能猜中');
if (parseInt(inNumber) === randomNumber) {
    document.write('厉害，你猜中了这个数字');
} else {
    document.write('差一点，这个数字是: ' + randomNumber);
}