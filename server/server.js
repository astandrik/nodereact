var express = require("express"),
    app     = express();

    config = require('config')(app),
    router = require('router')(app);




app.listen(process.env.PORT || 8080);
console.log('http://127.0.0.1:11960');
