const time = document.querySelector('#time');

function realTime() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, '0');
  const minuate = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  time.innerText = `${hour} : ${minuate} : ${second}`;
}

function Interval(callback, second) {
  callback();
  return setInterval(callback, second * 1000);
}

Interval(realTime, 1);
