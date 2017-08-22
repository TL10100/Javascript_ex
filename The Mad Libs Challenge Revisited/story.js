var questions = 3;
var questionsLeft = '['+ questions +' questions left ]'; //把变量放进字符串中，两边放+号

var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
var questionsLeft = '['+ questions +' questions left ]';
var verb = prompt('Please type a verb' + questionsLeft);
questions -= 1;
var questionsLeft = '['+ questions +' questions left ]'; // DRY never repeat the same code twice
var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);