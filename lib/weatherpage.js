module.exports = {
    HTML:function(city_name, cityPlacename, weather,temp_max,temp_min, current_temp, humidity, wind_speed, clear_day_random_number,cloudy_day_random_number,rainy_random_number,foggy_day_random_number,snowy_day_random_number){
        return  `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Weather in ${cityPlacename}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link rel="icon" type="image/png" href="favicon.ico" sizes="128x50" />
            </head>
            <body>
                <div class="maintitle">
                    <a href="/" id="logo">WEATHERFLEX</a>
                </div>
                <div class="maincontainer">
                    <div id="InputBox">
                        <form action="/search" method="get">
                            <input type="text" id="Weather_input" placeholder="Enter the city name" size="40" name="placename">
                            <button id="Search_Button" type="submit"><i class="fas fa-search"></i>
                        </form>
                    </div>
                    <div class="weather">
                        <div class="weather_description">
                            <div id="City" class="box">Weather in <b>${cityPlacename}</b></div>
                            <div id="Temp" class="box">Current Temperature: ${current_temp}°C</div>
                            <div id="weathernow" class="box">${weather}</div>
                            <div id="min_max_temperature" class="box">${temp_min}°C / ${temp_max}°C</div>
                            <div id="humidity" class="box">humidity: ${humidity}%</div>
                            <div id="windspeed" class="box">Wind Speed: ${wind_speed}m/s</div>
                        </div>
                    </div>
                </div>
                <!-- 날씨에 따라서 특정 코드를 http://openweathermap.org/img/w/과 .png 사이에 넣으면 아이콘이 생성됨 -->
            </body>
            </html>
            <script>          

                var weather = "${weather}"
                

                // icon set up
                var weather_icon = document.createElement('img');
                weather_icon.id = "weather_icon" 
                document.getElementById('weathernow').appendChild(weather_icon);
                

                if (weather.match('맑음')) {
                    document.body.style.backgroundImage = "url('../wallpapers/Clear/Clear${clear_day_random_number}.jpg')";
                    document.body.style.color = "white";
                    document.body.style.fontWeight = "bold";
                    weather_icon.src = "/Brand-New weather icons/clear sky.png"
                    weather_icon.style.width = "1.4em"
                    weather_icon.style.height = "1.4em"
                    weather_icon.style.marginLeft = "0.5em"
                    weather_icon.style.marginTop = "0em";
                }

                if (weather.match("구름") || weather.match("흐림")) {
                    document.body.style.backgroundImage = "url('../wallpapers/Cloudy/Cloudy${cloudy_day_random_number}.jpg')";
                    document.body.style.color = "white";
                    document.body.style.fontWeight = "bold";
                    weather_icon.src = "/Brand-New weather icons/broken clouds.png"
                    weather_icon.style.width = "2em"
                    weather_icon.style.height = "1.2em"
                    weather_icon.style.marginLeft = "0.5em"
                }
                if((weather.match("조금") || weather.match("약간")) && weather.match("구름") ){
                    const random_number = Math.floor(Math.random() * 18) + 1;
                    document.body.style.backgroundImage = "url('../wallpapers/Cloudy/Cloudy${cloudy_day_random_number}.jpg')";
                    document.body.style.color = "white";
                    document.body.style.fontWeight = "bold";
                    weather_icon.src = "/Brand-New weather icons/few clouds.png"
                    weather_icon.style.width = "1.7em"
                    weather_icon.style.height = "1.2em"
                    weather_icon.style.marginLeft = "0.5em"
                }
                if (weather.match("비") || weather.match("소나기")) {
                    const random_number = Math.floor(Math.random() * 12) + 1;
                    document.body.style.backgroundImage = "url('../wallpapers/Rainy/Rainy${rainy_random_number}.jpg')";
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
                    document.body.style.backgroundImage = "url('../wallpapers/Rainy/Rainy${rainy_random_number}.jpg')";
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
                    document.body.style.backgroundImage = "url('../wallpapers/Fog/Fog${foggy_day_random_number}.jpg')";
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
                    document.body.style.backgroundImage = "url('../wallpapers/Snow/Snow${snowy_day_random_number}.jpg')";
                    document.body.style.color = "rgb(148, 144, 144)";
                    document.body.style.fontWeight = "bold";
                    document.body.style.backgroundColor = "black"
                    weather_icon.src = "/Brand-New weather icons/snow.png"
                    weather_icon.style.width = "1.5em"
                    weather_icon.style.height = "1.4em"
                    weather_icon.style.marginLeft = "0.5em"
                    weather_icon.style.marginTop = "0.2em";
                    
                }
            </script>
            <script src="iconcreate.js"></script>
            <link rel="stylesheet" href="main.css">
        `
    }
}