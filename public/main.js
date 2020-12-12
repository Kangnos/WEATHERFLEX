var title = document.getElementById("title")
var City = document.getElementById("City");
var Temp = document.getElementById("Temp");
var FeelingTemp = document.getElementById("FeelingTemp")
var Weathernow = document.getElementById("weathernow")
var min_max_temperature = document.getElementById("min_max_temperature")
var humidity = document.getElementById("humidity")
var windspeed = document.getElementById("windspeed")

function input_text() {
    var citynameinputText = document.getElementById("Weather_input").value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${citynameinputText}&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr`
    ).then(function (res) {
        return res.json();
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
            document.getElementById('weathernow').appendChild(weather_icon); 

            // Main weathher forecast work
            document.title = `Weather in ${json.name}`              
            const weather = json.weather[0].description;

            // rain
            if (weather.match("실")) {
                Weathernow.innerHTML = '<p id="weathertag_inside_weathernow" style="margin:0px">'+ "이슬 비" + "</p>"
            }
            else{
                Weathernow.innerHTML = '<p id="weathertag_inside_weathernow" style="margin:0px">' + weather + "</p>"
            }

            // Clouds
            if (weather.match("튼구름") ) {
                Weathernow.innerHTML = '<p id="weathertag_inside_weathernow" style="margin:0px">'+ "대체로 흐림" + "</p>"
            }
            else if(weather.match("온흐림")){
                Weathernow.innerHTML = '<p id="weathertag_inside_weathernow" style="margin:0px">'+ "흐림" + "</p>"
            }
            else{
                Weathernow.innerHTML = '<p id="weathertag_inside_weathernow" style="margin:0px">' + weather + "</p>"
            }

            // Fog
            if(json.weather[0].main.match("Mist") || json.weather[0].main.match("Haze") || json.weather[0].main.match("Fog"))
            {
                Weathernow.innerHTML = '<p id="weathertag_inside_weathernow" style="margin:0px">'+ "안개" + "</p>"
            }
            document.getElementById('weathernow').appendChild(weather_icon); 
            City.innerHTML = json.name
            Temp.innerHTML = "Current Temperature: " + json.main.temp + "°C";
            FeelingTemp.innerHTML = "Feels-like Temperature: " + json.main.feels_like + "°C";
            min_max_temperature.innerHTML = json.main.temp_min + "°C " + "/ " + json.main.temp_max + "°C "
            humidity.innerText = "humidity: " + json.main.humidity + "%"
            windspeed.innerHTML = "Wind Speed: " + json.wind.speed + "m/s";
            

            // Finding weather status by using 'if'
            if (weather.match('맑음')) {
                const random_number = Math.floor(Math.random() * 25)+1;
                document.body.style.backgroundImage = `url('../wallpapers/Clear/Clear${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                weather_icon.src = "/Brand-New weather icons/clear sky.png"
                weather_icon.style.width = "1.4em"
                weather_icon.style.height = "1.4em"
                weather_icon.style.marginLeft = "0.5em"
                weather_icon.style.marginTop = "0em";
            }
            if (weather.match("구름") || weather.match("흐림")) {
                const random_number = Math.floor(Math.random() * 19) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/Cloudy/Cloudy${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                weather_icon.src = "/Brand-New weather icons/broken clouds.png"
                weather_icon.style.width = "2em"
                weather_icon.style.height = "1.2em"
                weather_icon.style.marginLeft = "0.5em"
            }
            if(weather.match("약간") && weather.match("구름")){
                const random_number = Math.floor(Math.random() * 18) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/Cloudy/Cloudy${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                weather_icon.src = "/Brand-New weather icons/few clouds.png"
                weather_icon.style.width = "1.7em"
                weather_icon.style.height = "1.2em"
                weather_icon.style.marginLeft = "0.5em"
            }
            if (weather.match("비") || weather.match("소나기")) {
                const random_number = Math.floor(Math.random() * 12) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/Rainy/Rainy${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                weather_icon.src = "/Brand-New weather icons/rain.png"
                weather_icon.style.width = "1.5em"
                weather_icon.style.height = "1em"
                weather_icon.style.marginLeft = "0.5em"
                weather_icon.style.marginTop = "0.2em";
            }

            if(weather.match("뇌우")){
                const random_number = Math.floor(Math.random() * 12) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/Rainy/Rainy${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                weather_icon.src = "/Brand-New weather icons/thunderstorm.png"
                weather_icon.style.width = "1.5em"
                weather_icon.style.height = "1em"
                weather_icon.style.marginLeft = "0.5em"
                weather_icon.style.marginTop = "0.2em";
            }
            if (weather.match("안개") || weather.match("박무") || weather.match("연무")) {
                const random_number = Math.floor(Math.random() * 10) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/Fog/Fog${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                weather_icon.src = "/Brand-New weather icons/fog.png"
                weather_icon.style.width = "1.9em"
                weather_icon.style.height = "1em"
                weather_icon.style.marginLeft = "0.5em"
                weather_icon.style.marginTop = "0.2em";
            }
            if (weather.match("눈")) {
                const random_number = Math.floor(Math.random() * 13) + 1;
                document.body.style.backgroundImage = `url('../wallpapers/Snow/Snow${random_number}.jpg')`;
                document.body.style.color = "white";
                document.body.style.fontWeight = "bold";
                document.body.style.backgroundColor = "black"
                weather_icon.src = "/Brand-New weather icons/snow.png"
                weather_icon.style.width = "1.5em"
                weather_icon.style.height = "1.4em"
                weather_icon.style.marginLeft = "0.5em"
                weather_icon.style.marginTop = "0.2em";
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

