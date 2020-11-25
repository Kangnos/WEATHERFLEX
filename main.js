var express = require('express')
const app = express();
const fs = require("fs");
var compression = require('compression')
app.use(compression())
var WeatherFlexMainpage = require('./lib/main.js')

app.use(express.static('public'));

app.get('/', function (req, res) {
    var mainpage = WeatherFlexMainpage.HTML();
    res.send(mainpage)
});

app.listen(3000, function () {
    console.log("Example app is running")
})