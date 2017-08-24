function alertRandom() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
  return randomNumber;   //遇到return就结束，跳出，不执行下面的内容
}
alert(alertRandom());

//判断一个内容框是否为空的应用
function isEmailEmpty() {
  var field = document.getElementById('email');
  if (field.value === '') {
     return true;
  } else {
     return false;
  }
}
var fieldTest = isEmailEmpty();
if (fieldTest === true) {
  alert("Please enter")
}