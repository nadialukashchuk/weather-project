function displayTemperature(response){
    let temperatureElement = document.querySelector("#current-temperature")
    let temperature = Math.round(response.data.main.temp)
    let cityElement = document.querySelector("#current-city")
    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = temperature ;
}

function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");


    let city = searchInputElement.value

    let apiKey = "b4535b266948ae4e87b393c2d704d3ac"

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature)    
}


//API




function formatDate(date) {
    let minutes = date.getMinutes();
let hours = date.getHours();
let day = date.getDay();

if (minutes < 10) {
    minutes = `0${minutes}`;
}
if (hours < 10 ){
    hours = `0${hours}`
}



let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"]

let formatDay = days[day]
    return `${formatDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();


currentDateElement.innerHTML = formatDate(currentDate);



function displayForecast (){
    let forecastElement = document.querySelector("#forecast");


    let days = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let forecastHtml = "";
    days.forEach(function (day) {
    
    forecastHtml = forecastHtml + 
     `

    <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">:D</div>
        <div class="weather-forecast-temperatures">
        <div class="weather-forecast-temperature">
          <strong>12°</strong>
         </div>
         <div class="weather-forecast-temperature">23°</div>
         </div>
        </div>
`;
});
forecastElement.innerHTML = forecastHtml

}

    

displayForecast()