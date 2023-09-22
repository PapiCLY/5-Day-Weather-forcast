// <<<<<<< HEAD
//Need to pull API data, use local storage to save previous searches, then show a 5 day weather for the searched city
// =======
//Need to find long/lat for coordinates
// >>>>>>> b781220b289080b88942c52b7e2ca7e7efe4cf39

let apiKey = 'ce6c5ccfc970f8d24550539f01a4e90d'
let previousSearches = JSON.parse(localStorage.getItem('previousSearches')) || []
let searchBtn = document.querySelector('#searchBtn').addEventListener('click', ()=>{
    getWeather()
})

updatePreviousSearchList = ()=>{
    const previousSearchList = document.querySelector('#previousSearchList');
    previousSearchList.innerHTML = '';

    previousSearches.forEach(search =>{
        const listItem = document.createElement('li');
        listItem.textContent = search;
        previousSearchList.appendChild(listItem)
    })
}



getWeather = ()=>{

    let searchField = document.querySelector('#searchField').value
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&cnt=1&appid=${apiKey}&units=imperial`
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&cnt=1&appid=${apiKey}&units=imperial`

    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        const currentDate = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.querySelector('#currentLocation').textContent = `${data.name} - ${currentDate}`;
        document.querySelector('img').src = data.weather[0].icon
        document.querySelector('#currentDayTemp').textContent = `Current Temp: ${Math.round(data.main.temp)}°F`
        document.querySelector('#currentDayHumidity').textContent = `Humidity: ${data.main.humidity} %`
        document.querySelector('#currentDayWindSpeed').textContent = `Wind Speed: ${data.wind.speed} MPH`
        document.querySelector('.currentWeather').setAttribute('style', 'display:block;')
        previousSearches.push(searchField);
        localStorage.setItem('previousSearches', JSON.stringify(previousSearches))
        updatePreviousSearchList();
    })
    .catch(err=>{
        console.log(`error${err}`)
    })
}


