const API_KEY = "c6deb5fbaddb5eabf993577e75121e15"
const locaton = navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position)
  // console.log(`You live in ${lat}, ${lon}`);  
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data =>{
  //     const weatherContainer = document.querySelector("#weather span:first-child")
  //     const cityContainer = document.querySelector("#weather span:first-child")
  //   city.innerText = data.name;
  //   weather.innerText = `${data.weather[0].main} / ${data.main}`;
  // });
}

function onGeoError(){
  // alert("Can't find your location")
}



console.log("weather");