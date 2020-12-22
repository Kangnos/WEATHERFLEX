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
const Homepage = require("./lib/Homepage.js")
const WeatherFlexMainpage  = require("./lib/weatherpage.js");
const { request } = require('http');


app.get('/', function (req, res) {
    var Homepagetemplate = Homepage.HTML();
    res.send(Homepagetemplate);
});

app.use("/search", function(req,res){
    var city_name = req.query.placename.toLowerCase();
    var WeatherFlexWeatherpage = WeatherFlexMainpage.HTML(city_name);
    res.send(WeatherFlexWeatherpage);
})

app.listen(3000, function () {
    console.log("Example app is running")
})