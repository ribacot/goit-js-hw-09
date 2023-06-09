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

refs.btnStartEl.addEventListener('click', onClick);

refs.btnStartEl.disabled = true;

let selectedDate = null;
let timerTime = null;
let date=null;
 let dateNow=new Date;
// console.dir(dateNow);

function onClick() {setInterval(createTimerDom,1000)

  // return console.log(timerTime);
}
function createTimerDom(){
  date = new Date();
  dateNow = date.getTime();
  const time = selectedDate - dateNow;
  
  timerTime = convertMs(time);
  const timerTimeLeading=addLeadingZero(timerTime)
  createTextTimer(timerTimeLeading);

}


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
    // const time = selectedDate - dateNow;
    // timerTime = convertMs(time);
    // console.log(timerTime);

    // createTimer(timerTimeLeading);
  },
};

function addLeadingZero(timeArr) {
  return Object.values(timeArr).map(el =>
    el.toString().padStart(2, 0)
  );
}

function createTextTimer(timerTimeArr) {
  refs.daysEl.textContent = timerTimeArr[0];
  refs.hoursEl.textContent = timerTimeArr[1];
  refs.minutesEl.textContent = timerTimeArr[2];
  refs.secondsEl.textContent = timeerTimeArr[3];
}


const calendars = flatpickr('#datetime-picker', options);
