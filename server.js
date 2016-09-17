var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

import graphQLHTTP from 'express-graphql';
import schema from './data/schema.js';

var app = new (require('express'))()
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}))
app.use(webpackHotMiddleware(compiler))


app.use('/graphql', graphQLHTTP({
    schema,
    pretty: true,
    graphiql: true,
}));

app.get("*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});


app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})