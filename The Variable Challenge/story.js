var name = prompt("What is your name?");
var friendName = prompt("What is your best friend's name?");
var age = prompt("How old are you?");
var sex = prompt("You are a boy?or a girl?");
var single = prompt("Are you single? Yes? No?");

var message = "Hi, " + name;
message += ".I was told by your best friend." + friendName;
message += " that you are " + age + "years old";
document.write(message);