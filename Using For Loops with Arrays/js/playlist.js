var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}


function writeList(list) {
    var html = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
      html += '<li>' + list[i] + '</li>';
    }
    html += '</ol>';
    print(html); //最后效果要输出
}
// console.log(writeList(playList));
// var finallyList = writeList(playList);
// print(finallyList);
writeList(playList);
