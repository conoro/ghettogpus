'use strict';
const button = document.querySelector('#ignition');
const status = document.querySelector('#ignition-status');
const messages = [
  'CLICK. ...CLICK. GIVE IT ANOTHER GO.',
  'COUGH. SPLUTTER. THAT SOUNDED PROMISING.',
  "IT'S ALIVE. TOLD YOU THERE WAS SOMETHING IN IT.",
  'SMALL BRAINS. OLD BONES. NEW TRICKS. COMING SOON.'
];
let attempt = 0;
button.addEventListener('click', () => {
  status.textContent = messages[Math.min(attempt, messages.length - 1)];
  attempt += 1;
  if (attempt >= 3) {
    document.body.classList.add('alive');
    button.children[1].textContent = 'STILL GOT IT';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
