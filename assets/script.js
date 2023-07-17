var apiKey = 'ec0abd7563a7622e43e501bd5d7eefbc';
var forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=';
var currentWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

// selects users city search by name input 
var choosenCity = document.querySelector('#cityInput');
var searchBtn = document.querySelector('.searchBtn');

// fetches weather info from api 
async function checkWeather(cityField) {
    // Request 1: Current Weather
    var currentWeatherResponse =  await fetch(currentWeatherApiUrl + cityField + '&appid=' + apiKey);
    var currentWeatherData = await currentWeatherResponse.json();
    console.log("CURRENT WEATHER", currentWeatherData);

    // Request 2: 5 day forecast
    var forecastResponse =  await fetch(forecastApiUrl + cityField + '&appid=' + apiKey);
    var forecastWeatherData = await forecastResponse.json();
    console.log("FORECAST DATA", forecastWeatherData);

    // Get 5 days out of the list
    console.log(forecastWeatherData.list[0]);
    var data = forecastWeatherData.list[0];
    document.querySelector('.city').innerHTML = data.city.name;
    document.querySelector('.current-date').innerHTML = data.dt_txt;
    document.querySelector('.current-temp').innerHTML = Math.round(data.main.temp) + 'F';
    document.querySelector('.current-wind').innerHTML = data.wind.speed + 'km/h';
    document.querySelector('.current-humidity').innerHTML = data.name.humidity + '%';
    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(choosenCity.value);
});

checkWeather(choosenCity.value);
