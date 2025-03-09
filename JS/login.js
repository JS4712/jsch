const loginForm = document.querySelector('.login');
const loginInput = document.querySelector('.login input');
const greeting = document.querySelector('h1');
const allHidden = document.querySelectorAll('.hidden');

const HIDDEN_KEY = 'hidden';

function submitLoginInput(event, HIDDEN_KEY) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem('username', username);
  removeClass(HIDDEN_KEY, username);
}

const savedUserName = localStorage.getItem('username');

if (savedUserName === null) {
  loginForm.addEventListener('submit', submitLoginInput);
} else {
  loginForm.style.display = 'none';
  removeClass(HIDDEN_KEY, savedUserName);
}

function removeClass(HIDDEN_KEY, username) {
  loginForm.style.display = 'none';
  loginForm.classList.add(HIDDEN_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_KEY);
  allHidden.forEach((item) => item.classList.remove(HIDDEN_KEY));
  allHidden.forEach((item) => (item.style.display = 'flex'));
}
