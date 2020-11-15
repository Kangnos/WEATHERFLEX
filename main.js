var express = require('express')
const app = express();
const fs = require("fs");
var compression = require('compression')
app.use(compression())

app.use(express.static('public'));

app.get('/', function(req, res){
    fs.readFile("main.html", function(err, data){
        res.end(data)
    })
})


app.listen(3000, function () {
    console.log("Example app is running")
})