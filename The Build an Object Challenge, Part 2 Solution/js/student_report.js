var message = '';
var student;
var question;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
}

for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    question = prompt('输入学生姓名开始进行搜索，输入quit退出');
    if (question === 'quit') {
        break;
    } else if (students[i].indexOf(question) > -1) {

    }
}

print(message);