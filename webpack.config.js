var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var precss = require('precss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    "env": {
                        "development": {
                            "presets": ["react-hmre"],
                            "plugins": [
                                ["react-transform", {
                                    "transforms": [{
                                        "transform": "react-transform-hmr",
                                        "imports": ["react"],
                                        "locals": ["module"]
                                    }]
                                }]
                            ]
                        }
                    },
                }
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
}