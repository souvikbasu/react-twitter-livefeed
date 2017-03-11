/*
 ./webpack.config.js
 */
const path = require('path');

module.exports = {
    entry: './client.js',
    output: {
        path: path.resolve('static/js'),
        filename: 'all.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    }
}