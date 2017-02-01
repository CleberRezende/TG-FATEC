/**
 * Created by Cleber Spirlandeli on 28/01/2017.
 */

module.exports = function () {

    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const request = require('request');
    const http = require('http');

    var app = express();

    app.use(cors());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    require('./api/route/usuarioRoute')(app);

    app.listen(3000, () => { // app.listen(3000)
        console.log('    Server Localhost:3000 server.js');
    });
}
