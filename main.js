var express = require('express')
const app = express();
const fs = require("fs");
var compression = require('compression')
app.use(compression())
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
var url = require('url');
app.use(express.static('public'));
app.use(bodyParser.json());
var WeatherFlexMainpage = require('./lib/searchpage.js')
var WeatherFlexWeatherpage = require("./lib/weatherpage.js");
const { request } = require('http');
var weather = require('openweather-apis');


app.get('/', function (req, res) {
    var weatherflex_homepage = WeatherFlexMainpage.HTML();
    res.send(weatherflex_homepage);
});

app.use("/search", function(req,res){
    var city_name = req.query.placename;
    var weather_template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Weather in ${city_name}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="shortcut icon" type="image/png" href="favicon.ico" sizes="128x50" />
        </head>
        <body>
            <div class="maintitle">
                <a href="/" id="logo">WEATHERFLEX</a>
            </div>
            <div class="maincontainer">
                <div id="InputBox">
                    <input type="text" id="Weather_input" placeholder="Input the city name" size="40">
                    <button onclick="input_text()" id="Search_Button"><i class="fas fa-search"></i>
                </div>
                <div class="weather">
                    <div class="weather_description">
                        <div id="City" class="box"></div>
                        <div id="Temp" class="box"></div>
                        <div id="FeelingTemp" class="box"></div>
                        <div id="weathernow" class="box"></div>
                        <div id="min_max_temperature" class="box"></div>
                        <div id="humidity" class="box"></div>
                        <div id="windspeed" class="box"></div>
                    </div>
                </div>
            </div>
            <!-- 날씨에 따라서 특정 코드를 http://openweathermap.org/img/w/과 .png 사이에 넣으면 아이콘이 생성됨 -->
        </body>
        </html>
        <script >
        </script>
        <script src="main.js"></script>
        <script src="iconcreate.js"></script>
        <link rel="stylesheet" href="main.css">
    `
    res.send(weather_template);
})

app.listen(3000, function () {
    console.log("Example app is running")
})