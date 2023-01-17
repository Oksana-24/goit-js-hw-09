const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
    timerId = setInterval(() => { getBgColor() }, 1000)
    // setInterval(() => { getBgColor() }, 1000)
    
    btnStart.toggleAttribute('disabled');
}

function onStop() {
    clearInterval(timerId);

    btnStart.removeAttribute('disabled');
}

function getBgColor() {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
}



