const API_KEY = "c6deb5fbaddb5eabf993577e75121e15"

function onGeoOk(position) {
  // console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      temp.innerText = `${data.main.temp}°`;
      city.innerText = `@${data.name}`;            
    });
          // console.log(data.name, data.main.temp))
}

function onGeoError() {
  // alert("Can't find your location");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);