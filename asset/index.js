

setTimeout(() => {
  var element = document.querySelector('body');
  element.classList.add('unleashed');
}, 2000);

const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>Inkstellar Portfolio</h1>`;
var typed = new Typed('.p1title', {
  strings: ["Hi, I'm Kousigan.", 'I <u>design</u> experience.'],
  typeSpeed: 50,
  backSpeed: 50,
  cursorChar: '_',
  backDelay: 3000,
  startDelay: 2500,
  loop: true
});

document.querySelector('.darkmode').addEventListener('click', function() {
  var element = document.querySelector('body');
  element.classList.toggle('darkmode');
});
