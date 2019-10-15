const path = require('path');
const merge = require('webpack-merge');

const baseCfg = require('./webpack.base.config');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlPlugin = require("html-webpack-plugin");

const timeReverse = new Date().getTime().toString().split('').reverse().join('');

module.exports = merge(baseCfg, {
    mode: 'production',
    output: {
        path: path.resolve('dist'),
        filename: `[name].[contenthash].${timeReverse}.js`,
        chunkFilename: `[name].[contenthash].${timeReverse}.js`,
        publicPath: './'
    },
    devtool: false,
    stats: false,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlPlugin({
            filename: "index.html",
            title: "123",
            template: path.resolve("src/index.html"),
            showErrors: true,
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true,
                },
            }),
        ]
    }
})
