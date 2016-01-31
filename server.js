var express = require("express");
var app     = express();
var path    = require("path");
var fs = require('fs');
var bodyParser = require('body-parser');
var Beautifier = require('node-js-beautify');
var b = new Beautifier(); // "awesome"


app.use('/libs',express.static(path.join(__dirname, 'site/libs/js')));
app.use('/js',express.static(path.join(__dirname, 'site/js')));
app.use('/css',express.static(path.join(__dirname, 'site/libs/css')));
app.use('/csscustom',express.static(path.join(__dirname, 'site/css')));
app.use('/',express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/site/index.html'));
});

app.get('/messages', function(req,res) {
  var data = require('data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

app.post('/postMessage', function(req, res) {
  var data;
  try {
     data = require('data.json');
  } catch(e) {
    data = [];
  }
  var newid = (data.map((item) => {return item.id}).sort((a,b) => {return a > b ? -1 : 1})[0] + 1) || 1;
  req.body.id = newid;
  data.push(req.body);
  fs.writeFile('./node_modules/data.json', (b.beautify_js(JSON.stringify(data), {})));
  res.send();
});

app.listen(11960);
console.log('http://127.0.0.1:11960');
