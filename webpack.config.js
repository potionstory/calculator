const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
 
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
 
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 3000,
        contentBase: __dirname + '/public/',
    },
 
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
                }
            },
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                },
                {
                    loader: 'sass-loader'
                }]
            })
        }]
    },
 
    plugins: [
        new ExtractTextPlugin({
            filename: '/styles/calculator.css',
            disable: process.env.NODE_ENV !== 'production'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'calculator',
            template: 'index.ejs'
        })
    ]
};