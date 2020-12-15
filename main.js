var express = require('express')
const app = express();
const fs = require("fs");
var compression = require('compression')
app.use(compression())
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var WeatherFlexMainpage = require('./lib/searchpage.js')
var WeatherFlexWeatherpage = require("./lib/weatherpage.js");
const { request } = require('http');
var weather = require('openweather-apis');


app.use(express.static('public'));

app.get('/', function (req, res) {
    var weatherflex_homepage = WeatherFlexMainpage.HTML();
    res.send(weatherflex_homepage);
});

app.get("/search", function(req,res){
    var weatherflex_weatherpage = WeatherFlexWeatherpage.HTML();
    res.send(weatherflex_weatherpage);
})

app.listen(3000, function () {
    console.log("Example app is running")
})