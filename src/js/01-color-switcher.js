const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('.js-btnStart'),
  btnStop: document.querySelector('.js-btnStop'),
};

refs.body.addEventListener('click', onClick);

let timerId = null;
refs.btnStop.disabled = true;

function onClick(e) {
  const { target } = e;
  const start = target.classList.contains('js-btnStart');
  const stop = target.classList.contains('js-btnStop');

  if (!start && !stop) {
    return;
  }
  if (start) {
    target.disabled = true;
    refs.btnStop.disabled = false;

    return chengeColorBody();
  }
  refs.btnStart.disabled = false;
  target.disabled = true;
  return clearInterval(timerId);
}

function chengeColorBody() {
  return (timerId = setInterval(
    () => (refs.body.style.backgroundColor = getRandomHexColor()),
    1000
  ));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
