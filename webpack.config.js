var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8080
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],
    module: {
        loaders: [{
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'autoprefixer-loader'
                ]
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}