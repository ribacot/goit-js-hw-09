import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convertMs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnStartEl: document.querySelector('[data-start'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
refs.btnStartEl.addEventListener('click', onClick);

refs.btnStartEl.disabled = true;

let selectedDate = null;
let timerTime = null;
let date = null;
let dateNow = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    if (selectedDate < dateNow) {
      return Notify.failure('Please choose a date in the future');
    }
    refs.btnStartEl.disabled = false;
    Notify.success('correct choice');
  },
};

const calendars = flatpickr('#datetime-picker', options);

function onClick(e) {
  const intervalId = setInterval(() => {
    date = new Date();
    dateNow = date.getTime();
    const time = selectedDate - dateNow;
    if (time < 1000) {
      clearInterval(intervalId);
    }
    timerTime = convertMs(time);
    const timerTimeLeading = addLeadingZero(timerTime);
    createTextTimer(timerTimeLeading);
  }, 1000);
}

function addLeadingZero(timeObj) {
  for (key in timeObj) {
    if (timeObj.hasOwnProperty(key)) {
      timeObj[key] = timeObj[key].toString().padStart(2, 0);
    }
  }

  return timeObj;
}

function createTextTimer(timerTimeObj) {
  const { days, hours, minutes, seconds } = timerTimeObj;
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
}

// function addLeadingZero(timeArr) {
//   return Object.values(timeArr).map(el => el.toString().padStart(2, 0));
// }

// function createTextTimer(timerTimeArr) {
//   refs.daysEl.textContent = timerTimeArr[0];
//   refs.hoursEl.textContent = timerTimeArr[1];
//   refs.minutesEl.textContent = timerTimeArr[2];
//   refs.secondsEl.textContent = timerTimeArr[3];
// }
