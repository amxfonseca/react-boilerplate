var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './src'
    ],
    output: {
        path: './dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: [
                'style',
                'css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss'
                ]
            }
        ]
    }
}
