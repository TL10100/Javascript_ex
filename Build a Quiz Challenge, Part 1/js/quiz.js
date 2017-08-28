var quiz = [
    ['100和50哪一个比较大？','100'],
    ['华为和苹果哪一个是国产品牌？','华为'],
    ['炸弹7是哪个品牌的产品？','三星']
];
var correctAnswers = 0;
var answer;
var question;
var response;
var html;

function print(message) {
  document.write(message);
}
for (var i = 0; i < quiz.length; i += 1) {
  question = prompt(quiz[i][0]);
  answer = quiz[i][1];
  if (question === answer) {
    correctAnswers += 1;
  }
}

html = 'You got ' + correctAnswers +' question(s) right.';
print(html);

