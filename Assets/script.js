//Need to find long/lat for coordinates

var apiKey = '8ba90b6b36072ccf5c4c41cbde0e83bb'
let searchBtn = document.querySelector('#searchBtn').addEventListener('click', ()=>{
    getWeather()
})

getWeather = ()=>{

    let searchField = document.querySelector('#searchField').value
    let url = `api.openweathermap.org/data/2.5/weather?q=${searchField}&appid=${apiKey}`
    
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data.data.weather[0].main)
    })
    .catch(err=>{
        console.log(`error${err}`)
    })
}
