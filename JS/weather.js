const API_KEY = 'c94ffcdea6527340483a9c008a8ad917';

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#city');
      const weather = document.querySelector('#weather');
      const temperature = document.querySelector('#temperature');
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temperature.innerText = data.main['temp'];
    });
}
function fail() {
  alert('Cant find your location weather');
}

navigator.geolocation.getCurrentPosition(success, fail);
