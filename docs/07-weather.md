# Weather  
- geolocation of user
- navigator.geolocation.getCurrentPosition()
    - this function allows to collect location, wifi ...
    - search on google getCurrentPosition
    - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
- getCurrentPosition()을 이용하면 position object를 가져올 수 있다. 콘솔에서 확인 해보면 GeolocationPostion{'coords: ..', 'timestamp:..'.[Prototype]}의 정보가 나타난다.  
- https://openweathermap.org/current 에서 위에서 얻은 위도, 경도 정보를 이용해서 날씨정보를 불러온다.  
- https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}에 정보를 입력하면 결과를 리턴해준다. 
- ```
{"coord":{"lon":145.1294,"lat":37.8646},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":300.8,"feels_like":304.66,"temp_min":300.8,"temp_max":300.8,"pressure":1014,"humidity":82,"sea_level":1014,"grnd_level":1014},"visibility":10000,"wind":{"speed":3.94,"deg":150,"gust":4.2},"clouds":{"all":0},"dt":1692448949,"sys":{"sunrise":1692387461,"sunset":1692436154},"timezone":36000,"id":0,"name":"","cod":200}
```
- fetch(url)를 적용하면 url로 이동하지 않고 url의 정보를 가져온다
- URL을 json()으로 저장하고 data.main(도시), data.weather[0].main(날씨)를 불러온다