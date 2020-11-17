var title = document.getElementById("title")
var City = document.getElementById("City");
var Temp = document.getElementById("Temp");
var FeelingTemp = document.getElementById("FeelingTemp")
var Weathernow = document.getElementById("weathernow")
var min_max_temperature = document.getElementById("min_max_temperature")
var humidity = document.getElementById("humidity")

function input_text() {
    var citynameinputText = document.getElementById("Weather_input").value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${citynameinputText}&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang={kr}`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json)
        if (json.cod == "200") {
            // console.log(json.name)
            // console.log(json.main.temp)
            // console.log(json.main.feels_like)
            // console.log(json.weather[0].main)
            // console.log(json.weather[0].description)
            
            // img set up work 
            var weather_icon = document.createElement('img');
            weather_icon.id = "weather_icon" 
            weather_icon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`; 
            document.getElementById('weathernow').appendChild(weather_icon); 

            // Main weathher forecast work
            document.title = `Weather in ${json.name}`
            const weather = json.weather[0].description
            Weathernow.innerHTML = '<p id="weathertag_inside_weathernow">' + weather + "</p>"
            document.getElementById('weathernow').appendChild(weather_icon); 
            City.innerHTML = "Temperature in " + json.name
            Temp.innerHTML = "Current Temperature: " + json.main.temp + "°C";
            FeelingTemp.innerHTML = "Feels-like Temperature: " + json.main.feels_like + "°C";
            min_max_temperature.innerHTML = json.main.temp_min + "°C " + "/ " + json.main.temp_max + "°C "
            humidity.innerText = "humidity: " + json.main.humidity + "%"

            // Finding weather status by using 'if'
            if (weather.match('clear')) {
                const random_number = Math.floor(Math.random() * 10) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/clear/clear${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
            }
            if (weather.match("clouds")) {
                const random_number = Math.floor(Math.random() * 7) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/cloudy/cloudy${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                
            }
            if (weather.match("rain")) {
                const random_number = Math.floor(Math.random() * 10) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/rainy/rainy${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                
            }
            if (weather.match("fog") || weather.match("haze") || weather.match("mist")) {
                const random_number = Math.floor(Math.random() * 10) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/fog/fog${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                weather_icon.style.marginTop = "0.1em";
            }
            if (weather.match("snow")) {
                const random_number = Math.floor(Math.random() * 4) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/snow/snow${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                document.body.style.backgroundColor = "black"
            }

            else if (json.cod == "404") {
                console.log("It's error")
                // document.title = ``
                // document.getElementById('weathernow').appendChild(weather_icon); 
                // City.innerHTML = ``
                // Temp.innerHTML = ``
                // FeelingTemp.innerHTML = ``
                // min_max_temperature.innerHTML = ``
                // humidity.innerText = ``
                Weathernow.innerHTML = "It is wrong city name"
                
            }
            
        }
    })
}

