var apiKey = 'ec0abd7563a7622e43e501bd5d7eefbc';
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metrics&q=';
// is this url workinh? or is it my api key?
var choosenCity = document.querySelector('citySearch');
var searchBtn = document.querySelector('.searchBtn');

function checkWeather (choosenCity) {
    var response = fetch(apiUrl + '&appid=${apiKey}');
    var weatherData = response.json();

    console.log(weatherData);

    document.querySelector('.city').innerHTML.html = data.name;
    document.querySelector('.date').innerHTML.html = data.dt_txt;
    document.querySelector('.current-temp').innerHTML.html = Math.round(data.main.temp) + '℃';
    document.querySelector('.current-wind').innerHTML.html = data.wind.speed + 'km/h';
    document.querySelector('.current-humidity').innerHTML.html = data.name.humidity + '%';
console.log('HI!!!')
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(citySearch.value);
})
checkWeather(city);
