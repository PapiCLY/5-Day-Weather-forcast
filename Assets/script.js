
//connect with the DOM
let searchInput = document.querySelector('#searchField')
let searchBtn = document.querySelector('#searchbtn')

//button click to search for city
searchBtn.addEventListener('click', function(){
    findCity()
})

//function to call API
function findCity(){
    let weatherInfo = $('#searchField').val();
    
    let apiURL = `https://api.openweathermap.org/geo/1.0/direct?q=${weatherInfo}&limit=5&appid=35413ec59e50fae20859778ef25f379f`
    fetch(apiURL, {method: 'GET'}, 
    headers: {
        'X-RapidAPI-Key': '8959ff9965msh4479dc11ddcddc4p1bcd30jsndfe8e2947c47',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }).then(function(){
        if(response.ok){
            response.json().then(function(data){
                let city = data[0].location.name
                let cityIcon = 
                let temp = 
                let wind = 
                let hum = 
                let fiveDay = 
                let fiveIcon = 
            })
        }
    })