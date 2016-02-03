var express = require("express"),
    app     = express();
    
    config = require('config')(app),
    router = require('router')(app);




app.listen(11960);
console.log('http://127.0.0.1:11960');
