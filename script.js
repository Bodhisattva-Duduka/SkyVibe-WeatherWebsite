// submit form button

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const cityName = document.querySelector('#city-name-search').value
    console.log(cityName)
    fetchLocation(cityName)

    
})


// place name to coordinates converter

async function fetchLocation(searchValue) {
    const appid = 'db4ec9538bf2a1fcdffb50c08360a0c3'
    let locationData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${appid}`)
    let locationDataJson = await locationData.json()
    let latitude = locationDataJson[0]['lat']
    let longitude = locationDataJson[0]['lon']
    console.log(locationDataJson, latitude, longitude)
    findWeather(latitude, longitude)
}

// coordinates to weather info finder

async function findWeather(latitude, longitude) {
    const appid = 'db4ec9538bf2a1fcdffb50c08360a0c3'
    let locationData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}`)
    let locationDataJson = await locationData.json()
    console.log(locationDataJson.main)
    let temperature = locationDataJson.main.temp
    let humidity = locationDataJson.main.humidity
    let windSpeed = locationDataJson.wind.speed
    let weatherMain = locationDataJson.weather[0].main
    console.log(temperature, humidity, windSpeed, weatherMain)

}

// kelvin to celsius converter

function kelvinToCelsius(kelvinTemp) {
    let Celsius = kelvinTemp - 273.15
}