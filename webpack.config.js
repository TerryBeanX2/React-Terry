'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var webpack = require('webpack');
module.exports = {
    devtool: 'eval',
    entry: {
        app: [
            __dirname + '/src/entry.js' //唯一入口文件
        ]
    },
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        filename: '[name].bundle.js' //打包后输出文件的文件名
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: /src/
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=8192&name=src/images/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            }
        ]
    },
    devServer: {
        contentBase: './public',  //本地服务器所加载的页面所在的目录
        host:'172.16.218.67',
        port: 8080,
        historyApiFallback: true,  //不跳转
        inline: true,  //实时刷新
        open: true
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [require('autoprefixer')];
                }
            }
        })
    ]
};
