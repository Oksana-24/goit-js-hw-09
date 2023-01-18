import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const button = document.querySelector('button');

form.addEventListener('submit', onSubmit);

let position = 1;

const option = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position,delay})
      } else {
        reject({position,delay})
      }
  },delay)
  return promise
}

function onSubmit(event) {
  event.preventDefault();
  button.toggleAttribute("disabled");


  const { elements: { delay, step, amount } } = event.currentTarget;

  let delayFromPromise = Number(delay.value);
  let stepFromPromise = Number(step.value);
  let amountFromPromise = Number(amount.value);
  
  const promiseID = setInterval(() => {

    createPromise(position, delayFromPromise)
      .then(({ position, delay }) => {
    Notify.success(`Fulfilled promise ${position} in ${delay}ms`,option);
  })
      .catch(({ position, delay }) => {
    Notify.failure(`Rejected promise ${position} in ${delay}ms`,option);
  }).finally(() => {
    form.reset();
    // console.log(delayFromPromise);
    // console.log(stepFromPromise);
    // console.log(amountFromPromise);
  })
    
    if (position === amountFromPromise) {
      position = 1;
      clearInterval(promiseID);
      button.removeAttribute("disabled");
      
      return
    }
    position += 1
    delayFromPromise += stepFromPromise;

  },delayFromPromise)

}



