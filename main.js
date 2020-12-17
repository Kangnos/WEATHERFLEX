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
var WeatherFlexMainpage  = require("./lib/weatherpage.js");
const { request } = require('http');
var open_weather_api = require('openweather-apis');


app.get('/', function (req, res) {
    const Homepage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="shortcut icon" type="image/png" href="favicon.ico" sizes="128x50" />
        </head>
        <body>
            <div class="maintitle">
                <a href="/" id="logo">WEATHERFLEX</a>
            </div>
            <div class="maincontainer">
                <div id="InputBox">
                    <form action="/search" method="get">
                        <input type="text" id="Weather_input" placeholder="Input the city name" size="40" name="placename">
                        <button onclick="input_text()" id="Search_Button" type="submit"><i class="fas fa-search"></i>
                    </form>
                </div>
                <div class="weather">
                    <div class="weather_description">
                        <div id="City" class="box"></div>
                        <div id="Temp" class="box"></div>
                        <div id="weathernow" class="box"></div>
                        <div id="min_max_temperature" class="box"></div>
                        <div id="humidity" class="box"></div>
                        <div id="windspeed" class="box"></div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        <script >
        </script>
        <script src="main.js"></script>
        <script src="iconcreate.js"></script>
        <link rel="stylesheet" href="main.css">
    `
    res.send(Homepage);
});

app.use("/search", function(req,res){
    var city_name = req.query.placename;
    var WeatherFlexWeatherpage = WeatherFlexMainpage.HTML(city_name);
    res.send(WeatherFlexWeatherpage);
})

app.listen(3000, function () {
    console.log("Example app is running")
})