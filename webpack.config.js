var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        __dirname + '/src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path:  __dirname + '/dist',
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
                'style-loader',
                'css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        require('postcss-cssnext')
    ]
}
