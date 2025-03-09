const date = document.querySelector('#date');

const nowdate = new Date();
const year = nowdate.getFullYear();
const month = String(nowdate.getMonth() + 1).padStart(2, '0');
const day = String(nowdate.getDate()).padStart(2, '0');

date.innerText = `${year} ${month} ${day}`;
