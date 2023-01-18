import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const body = document.querySelector('body');
const timer = document.querySelector('.timer')
const input = document.querySelector('input')
const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', onStart);
let targetDate = null;
let timerId = null;
let differenceTime = null;

const option = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        targetDate = selectedDates[0].getTime();
        //console.log(selectedDates[0].getTime() > new Date().getTime()); 
    },
    onChange(selectedDates) {
        if (selectedDates[0].getTime() < new Date().getTime()) {
            Notify.failure('Please choose a date in the future',
            {
                background: '#ff5549',
                textColor: '#fff',
                childClassName: 'notiflix-notify-failure',
                notiflixIconColor: 'rgba(0,0,0,0.2)',
                fontAwesomeClassName: 'fas fa-times-circle',
                fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
                backOverlayColor: 'rgba(255,85,73,0.2)',
            },)
        }
    }
};
flatpickr("#datetime-picker", option);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
    const hours =addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function updateTextContent(time) {
    days.textContent = time.days;
    hours.textContent = time.hours;
    minutes.textContent = time.minutes;
    seconds.textContent = time.seconds;
}

function onStart() {

    timerId = setInterval(() => {
        const currentTime = Date.now();
        
        differenceTime = targetDate - currentTime;
        if (differenceTime < 0) {
            timer.innerHTML = "TIME IS UP";
            setTimeout(() => {
                location.reload(timer);
                btnStart.removeAttribute('disabled');
            }, 2000);
            clearInterval(timerId);
            
            return
        }
        const countTime = convertMs(differenceTime);
    
        updateTextContent(countTime);
    }, 1000);
    btnStart.toggleAttribute('disabled');
    
}
function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}