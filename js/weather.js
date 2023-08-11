const locaton = navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

const API_KEY = ""

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`You live in ${lat}, ${lon}`);  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data =>{
      const weatherContainer = document.querySelector("#weather span:first-child")
      const cityContainer = document.querySelector("#weather span:first-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.}`;
  });
}

function onGeoError(){
  
}

