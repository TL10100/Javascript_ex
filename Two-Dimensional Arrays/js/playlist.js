var playList = [
    ['心中的日月','王力宏'],
    ['一路向北','周杰伦'],
    ['派对动物','五月天']
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + '-' + songs[i][1] +'</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);





















