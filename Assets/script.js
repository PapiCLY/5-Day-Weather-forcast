let apiKey = 'ce6c5ccfc970f8d24550539f01a4e90d'
let previousSearches = JSON.parse(localStorage.getItem('previousSearches')) || []
let searchBtn = document.querySelector('#searchBtn').addEventListener('click', ()=>{
    todaysWeather();
    get5Day();
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



todaysWeather = ()=>{

    let searchField = document.querySelector('#searchField').value
    if(!searchField) return;
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
        document.querySelector('img').src = data.weather[0].icon + '.png'
        document.querySelector('#currentDayTemp').textContent = `Current Temp: ${Math.round(data.main.temp)}°F`
        document.querySelector('#currentDayHumidity').textContent = `Humidity: ${data.main.humidity} %`
        document.querySelector('#currentDayWindSpeed').textContent = `Wind Speed: ${data.wind.speed} MPH`
        previousSearches.push(searchField);
        localStorage.setItem('previousSearches', JSON.stringify(previousSearches))
        updatePreviousSearchList();
    })
    .catch(err=>{
        console.log(`error${err}`)
    })
}

get5Day = (coordinates)=>{

    let {lat, lon} = coordinates
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(`error${err}`)
    })
}


