function refreshWeather(response){
let temperatureElement = document.querySelector("#temperature")
let temperature = response.data.temperature.current
let cityElement = document.querySelector("#city")
let descriptionElement = document.querySelector("#description")
let humidityElement = document.querySelector("#humidity")
let windSpeedElement = document.querySelector("#wind-speed")
let timeElement = document.querySelector("#time")

let date = new Date(response.data.time * 1000);
let iconElement = document.querySelector("#icon")
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon" />
`

let countryElement = document.querySelector("#country")

console.log(response)


timeElement.innerHTML = formatDate(date);
cityElement.innerHTML = response.data.city
descriptionElement.innerHTML = response.data.condition.description
humidityElement.innerHTML = `${response.data.temperature.humidity}%`
windSpeedElement.innerHTML = `${Math.round(response.data.wind.speed)}km/h`
temperatureElement.innerHTML = Math.round(temperature)
countryElement.innerHTML = response.data.country

getForecast(response.data.city)
}


function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = days[date.getDay()]

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (hours < 10) {
        hours = `0${hours}`
    }

    return `${day} ${hours}:${minutes}`
}



function searchCity(city){
let apiKey = "9a020eota1ad7f08a5a5b4c81f029734"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

axios.get(apiUrl).then(refreshWeather)
}



function handleSearchSubmit(event){
    event.preventDefault()

let serachInput = document.querySelector("#search-form-input")

searchCity(serachInput.value)

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit)






function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[date.getDay()];
  }

function getForecast(city){
    let apiKey = "9a020eota1ad7f08a5a5b4c81f029734"
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`
    axios(apiUrl).then(displayForecast)
}






function displayForecast(response){
console.log(response.data)






let forecastElement = document.querySelector("#forecast")

let forecastHtml = ""

response.data.daily.forEach(function(day, index){
    if (index < 5){
    forecastHtml = forecastHtml + 
    `
    <div class="weather-forecast-day">
<div class="weather-forecast-date">${formatDay(day.time)}</div>
<img src="${day.condition.icon_url}" alt="" width="76"/>
<div class="weather-forecast-temperature"> 
<div class="weather-forecast-temperature-max">${Math.round(day.temperature.minimum)}°</div>
<div class="weather-forecast-temperature-min">${Math.round(day.temperature.maximum)}°</div>
</div>
</div>
`;

    }
})
forecastElement.innerHTML = forecastHtml
}


















searchCity("The Hague")


