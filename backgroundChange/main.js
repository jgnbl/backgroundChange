let button = document.querySelector('button');
let body = document.querySelector('body');
let colors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'pink'];

button.addEventListener('click', colorChanger);

function colorChanger() {
  let newColors = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[newColors];
}
