var express = require("express"),
    app     = express();

    config = require('config')(app),
    router = require('router')(app);



var port = process.env.PORT || 8080;
app.listen(port);
console.log('http://127.0.0.1:' + port);
