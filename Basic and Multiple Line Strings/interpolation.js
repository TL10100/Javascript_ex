function like(thing) {
  return 'I like ' + thing;
}

function love(thing) {
    return `I love ${thing}`;
}

const sentence = `<p>${like('apples')}, But ${love('oranges')}.</p>`;

document.querySelector('.interpolation').innerHTML = sentence;


// let likeLove = (thing1, thing2) => `I like ${thing1}, but love ${thing2}`;
// console.log(likeLove(`beer`, `sleeping`));
