const express = require('express');
const path = require('path');

const port = (process.env.PORT || 8080)
const app           = express(),
    DIST_DIR      = path.join(__dirname, "dist")
    HTML_FILE     = path.join(DIST_DIR, "index.html"),
    DEFAULT_PORT  = 8080

if (process.env.NODE_ENV !== 'production') 
{
    console.log("dev env")
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('./webpack.config.js')
    console.log(config);
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))
}

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function(req, res) {
    res.sendFile(HTML_FILE);
})

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
