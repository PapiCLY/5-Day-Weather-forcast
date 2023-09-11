<<<<<<< HEAD
//Need to pull API data, use local storage to save previous searches, then show a 5 day weather for the searched city
=======
//Need to find long/lat for coordinates
>>>>>>> b781220b289080b88942c52b7e2ca7e7efe4cf39

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
