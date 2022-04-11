const apiKey = '8bd255690b43e1b7a5f80e856f51a7d4';
const city = 'new york, usa'
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;



let weather = {}
console.log(weather)


// Grab Data
fetch(url)
    .then(res => res.json())
    .then((data) => {
        let weatherData = data.list.slice(0, 5).map(x => {
            console.log(x)
            return `
            <div class="weatherbox">
        
            <div class="weathericon"><img src="https://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png"></div>

            <div class="city">${city}</div>
    
            <div class="temp">${Math.round(x.main.temp)}</div>
    
            <div class="weatherdesc">${x.weather[0].description}</div>
            </div>
            `;

        }).join(' ')
        document
            .querySelector('#app')
            .insertAdjacentHTML("afterbegin", weatherData);

    })
    .catch((err) => {
        console.log(err)
    })