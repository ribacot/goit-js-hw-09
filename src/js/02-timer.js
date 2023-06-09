import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convertMs';

const refs = {
  btnStartEl: document.querySelector('[data-start'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

refs.btnStartEl.disabled = true;

let selectedDate = null;
let timerTime = null;
const date = new Date();
const dateNow = date.getTime();
console.dir(dateNow);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];

    if (selectedDate < dateNow) {
      return window.alert('Please choose a date in the future');
    }
    refs.btnStartEl.disabled = false;
    const time = selectedDate - dateNow;
    timerTime = convertMs(time);
    console.log(timerTime);
    const timerTimeLeading = addLeadingZero(timerTime);

    createTimer(timerTimeLeading);
  },
};

function addLeadingZero(timeArr) {
  const timeArrLeading = Object.values(timeArr).map(el =>
    el.toString().padStart(2, 0)
  );
  return timeArrLeading;
}

function createTimer(timeerTimeArr) {
  refs.daysEl.textContent = timeerTimeArr[0];
  refs.hoursEl.textContent = timeerTimeArr[1];
  refs.minutesEl.textContent = timeerTimeArr[2];
  refs.secondsEl.textContent = timeerTimeArr[3];
}
// console.log(selectedDate);
// const time = selectedDate - dateNow;
// console.log(time)
// const timerTime = convertMs(time);
// console.log(timerTime);

function onClick() {
  // console.log(selectedDate);
  const time = selectedDate - dateNow;
  // console.log(time);
  timerTime = convertMs(time);
  return console.log(timerTime);
}

const calendars = flatpickr('#datetime-picker', options);
refs.btnStartEl.addEventListener('click', onClick);
