var express = require('express')
var compression = require('compression')
var bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(compression())

const Homepage = require("./lib/Homepage.js")
const WeatherFlexMainpage  = require("./lib/weatherpage.js");
const { request } = require('http');


app.get('/', function (req, res) {
    var Homepagetemplate = Homepage.HTML();
    res.send(Homepagetemplate);
});

app.use("/search", function(req,res){
    var city_name = req.query.placename.toLowerCase();
    let apiKey = "cbe7f1eb13ae670e2e99a200f1df5a94"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric&lang=kr`
    request(url, function (err, response, body) {
        if(err){
          res.render('index');
        } 
        else {
            let weather = JSON.parse(body)
            if(weather.main == undefined){
              res.render('index');
            } else {
              let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
              let weatherpage = WeatherFlexMainpage.HTML(weatherText)
              res.send(weatherpage);
            }
        }
    });
});

app.listen(3000, function () {
    console.log("Example app is running")
})