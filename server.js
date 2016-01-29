var express = require("express");
var app     = express();
var path    = require("path");

app.use('/js',express.static(path.join(__dirname, 'site/js')));
app.use('/css',express.static(path.join(__dirname, 'site/css')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/site/index.html'));
})

app.listen(11960)