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
const Errorpage = require("./lib/Errorpage.js")


app.get('/', function (req, res) {
    var city_name = req.query.placename;
    var Homepagetemplate = Homepage.HTML();
    res.send(Homepagetemplate);
});

app.use("/search", function(req,res){
    var city_name = req.query.placename;
    console.log(city_name)
    request('https://api.openweathermap.org/data/2.5/weather?q='+ city_name + '&appid=cbe7f1eb13ae670e2e99a200f1df5a94&units=metric&lang=kr',function(error, response, body){
        const json = JSON.parse(body);
        if(json.cod == "200"){
            const json = JSON.parse(body);
    
            // Essential UI method
            const cityPlacename = json.name;    
            const temp_min = json.main.temp_min;
            const temp_max = json.main.temp_max;
            const current_temp = json.main.temp;
            const humidity = json.main.humidity;
            var weather = json.weather[0].description; // 날씨 현황 
            const wind_speed = json.wind.speed;

            const clear_day_random_number = Math.floor(Math.random() * 25)+1;
            const cloudy_day_random_number = Math.floor(Math.random() * 19) + 1;
            const rainy_random_number = Math.floor(Math.random() * 12) + 1;
            const foggy_day_random_number = Math.floor(Math.random() * 10) + 1;
            const snowy_day_random_number = Math.floor(Math.random() * 13) + 1;
            

            if (weather.match("실")) {
                weather = "이슬 비"
            }

            // Clouds
            if (weather.match("튼구름") ) {
                weather = "대체로 흐림"
            }
            if(weather.match("온흐림")){
                weather = "흐림"
            }

            // Mist
            if (weather.match("박무")) {
                weather = "안개"
            }
            
            // TEST
            console.log(json)
            console.log(cityPlacename)
            console.log(weather)
            console.log(json.cod)

            var WeatherFlexWeatherpage = WeatherFlexMainpage.HTML(city_name, cityPlacename, weather,temp_max,temp_min, current_temp, humidity, wind_speed, clear_day_random_number,cloudy_day_random_number,rainy_random_number,foggy_day_random_number,snowy_day_random_number);
            res.send(WeatherFlexWeatherpage);
        }
        else{
            var Homepagetemplate = Errorpage.HTML();
            res.send(Homepagetemplate);
            console.log("error")
        }
    });
})

app.listen(3000, function () {
    console.log("Example app is running")
})