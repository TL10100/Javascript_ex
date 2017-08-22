var inNumber = prompt('请输入一个开始数字');
var inNumber_end = prompt('请输入一个结束数字');
var intNumber = parseInt(inNumber); //parseInt 用于把string转换为number
var intNumber_end = parseInt(inNumber_end);
var message = '好的，下面我将生成一个数，它肯定在你输入的两个数字之间，你信吗？';
message += '请继续往下看';
message += ', 点击"确定"按钮！';
alert(message);
var outNumber = Math.floor(Math.random() * (intNumber_end - intNumber + 1)) + intNumber;
document.write('<h2>这个数字：' + outNumber + ' 一定在你输入的 ' + intNumber + ' 和 ' + intNumber_end + ' 之间</h2>');

