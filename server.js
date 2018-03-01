/**
 * This file represents the server logic of the web-app.
 * It defines routes to serve the webpack output and it also
 * defines routes for basic authentication.
 */

const APIRoutes = require("./API/Routes")
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const port = (process.env.PORT || 8080)
const app           = express(),
    DIST_DIR      = path.join(__dirname, "dist")
    HTML_FILE     = path.join(DIST_DIR, "index.html"),
    DEFAULT_PORT  = 8080

//TODO MOVE TO ENV
const SECRET_KEY = 'mumbojumborandomness';

if (process.env.NODE_ENV !== 'production')
{
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('./webpack.config.js')
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))
}

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));
app.use(bodyParser.json());

//this route is used to recieve valid jsonwebotkens for authentication
//for the application
app.post('/login', function(req, res) {
    if(req.body.username !== undefined && req.body.password !== undefined)
    {
        if(req.body.username === 'admin' && req.body.password === 'password')
        {
            var tokenData = {
                username : req.body.username
            }
            //sign token asynchronously
            jwt.sign(tokenData, SECRET_KEY, function(err, token) {
                if(err === null || err === undefined)
                    res.status(200).json({authorized: true, token: token});
                else
                    res.sendStatus(500);
            });
        }
        else
        {
            res.sendStatus(403);
        }
    }
    else
    {
        res.status(400).json(req.get('content-type'));
    }
})

//this route verifies the validity of a jsonwebtoken
//probably not necessary. Here for testing purposes
app.post('/verify', function(req, res) {
    if(req.body.token !== undefined)
    {
        jwt.verify(req.body.token, SECRET_KEY, function(err, decoded) {
            if(err || decoded === undefined)
            {
                res.status(200).json({verified: false})
            }
            else
                res.status(200).json({verified: true, decoded: decoded})
        });
    }
    else
    {
        res.sendStatus(400);
    }
})
APIRoutes.setup(app);

//Send index.html when the user access the web
app.get("*", function(req, res) {
    res.sendFile(HTML_FILE);
})

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
