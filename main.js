var express = require('express')
const app = express();
const fs = require("fs");
var compression = require('compression')
app.use(compression())
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
var request = require('request');
var url = require('url');
app.use(express.static('public'));
app.use(bodyParser.json());
const Homepage = require("./lib/Homepage.js")
const WeatherFlexMainpage  = require("./lib/weatherpage.js");


app.get('/', function (req, res) {
    var city_name = req.query.placename;
    var Homepagetemplate = Homepage.HTML(city_name);
    res.send(Homepagetemplate);
});

app.use("/search", function(req,res){
    var city_name = req.query.placename;
    console.log(city_name)
    request('https://api.openweathermap.org/data/2.5/weather?q='+ city_name + '&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr',function(error, response, body){
        if(!error&&response.statusCode==200){
            const json = JSON.parse(body);
            console.log(json)

            // Essential UI method
            const cityPlacename = json.name;    
            const temp_min = json.main.temp_min;
            const temp_max = json.main.temp_max;
            const current_temp = json.main.temp;
            const humidity = json.main.humidity;
            const weather = json.weather[0].description; // 날씨 현황 
            const wind_speed = json.wind.speed;
            console.log(cityPlacename)


            var WeatherFlexWeatherpage = WeatherFlexMainpage.HTML(city_name, cityPlacename, weather,temp_max,temp_min, current_temp, humidity, wind_speed);
            res.send(WeatherFlexWeatherpage);
        }
    });
})

app.listen(3000, function () {
    console.log("Example app is running")
})