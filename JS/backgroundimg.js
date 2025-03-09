const body = document.body;
const imgs = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
];

function randomBgImges() {
  const bodyImgs = imgs[Math.floor(Math.random() * imgs.length)];
  body.style.background = `url(JS/bgimgs/${bodyImgs}) no-repeat center`;
  body.style.backgroundSize = 'cover';
}

function Interval(callback, second) {
  callback();
  return setInterval(callback, second * 10000);
}

Interval(randomBgImges, 3);
