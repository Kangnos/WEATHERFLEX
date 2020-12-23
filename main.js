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
            console.log(body);
            const json = JSON.parse(body);
            console.log(json.weather)
        }
    });
    var WeatherFlexWeatherpage = WeatherFlexMainpage.HTML(city_name);
    res.send(WeatherFlexWeatherpage);
})

app.listen(3000, function () {
    console.log("Example app is running")
})