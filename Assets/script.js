// <<<<<<< HEAD
//Need to pull API data, use local storage to save previous searches, then show a 5 day weather for the searched city
// =======
//Need to find long/lat for coordinates
// >>>>>>> b781220b289080b88942c52b7e2ca7e7efe4cf39

let apiKey = 'ce6c5ccfc970f8d24550539f01a4e90d'
let searchBtn = document.querySelector('#searchBtn').addEventListener('click', ()=>{
    getWeather()
})

getWeather = ()=>{

    let searchField = document.querySelector('#searchField').value
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&cnt=1&appid=${apiKey}&units=imperial`
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&cnt=1&appid=${apiKey}&units=imperial`

    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        document.querySelector('img').src = data.weather[0].icon
        document.querySelector('#currentDayTemp').textContent = Math.round(data.main.temp) + '°F'
        document.querySelector('#currentDayHumidity').textContent = data.main.humidity + '%'
        document.querySelector('#currentDayWindSpeed').textContent = Math.round(data.wind.speed) + 'mp/h'
    })
    .catch(err=>{
        console.log(`error${err}`)
    })
}
