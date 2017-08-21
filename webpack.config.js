const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bootstrap: './src/bootstrap.js'
    },

    plugins: [new CleanWebpackPlugin(['./bundle'])],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'bundle/'),
        publicPath: 'bundle/'
    },

    devServer: {
        contentBase: './',
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.vue/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: 'babel-loader?presets=env'
                }
            }
        },{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },{
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100'
        }]
    },
};
