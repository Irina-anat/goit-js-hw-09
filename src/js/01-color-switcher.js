import '../css/01-color-switcher.css';
// 1
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

start.addEventListener("click", onStart);
stop.addEventListener("click", onStop);

let timerId = null;
stop.disabled = true;

function onStart() {
    timerId = setInterval(() => {
    start.disabled = true; 
    stop.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
//console.log(timerId) ;
};

function onStop() {
   // console.log(timerId)
    stop.disabled = true;
    start.disabled = false;
    clearInterval(timerId);    
};



//2
/*const startBtn = document.querySelector(`button[data-start]`);
//console.log(startBtn);
const stopBtn = document.querySelector(`button[data-stop]`);
//console.log(stopBtn);
const body = document.querySelector(`body`);
//console.log(body);
stopBtn.setAttribute("disabled", "disabled");

startBtn.addEventListener(`click`, onStartClick);
stopBtn.addEventListener(`click`, onStopClick);

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStartClick() {
    timerId = setInterval(() => {
    let color = getRandomHexColor();
        body.style.backgroundColor = color;
        startBtn.setAttribute("disabled", "disabled");
        stopBtn.removeAttribute("disabled");
    }, 1000);
}

function onStopClick() {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled")
    stopBtn.setAttribute("disabled", "disabled");
}*/


/*Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).*/


