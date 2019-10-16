const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const mode = process.env.ENV;
const isProduction = (mode === "production");

module.exports = {
    entry: {
        index: [path.resolve("src/index.ts")]
    },
    output: {
        publicPath: "/",
    },
    externals: {
        'vue': 'Vue',
    },
    output: {
        path: path.resolve('dist'),
        publicPath: "/",
    },
    resolve: {
        alias: {
            "@": path.resolve("src"),
            "utils-scss": path.resolve("src/utils/scss/utils-scss.scss"),
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: "vue-loader"
        },
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
            }],
            exclude: /node_modules/,
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                },
                {
                    loader: "ts-loader",
                    options: {
                        appendTsxSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    }
                }
            ]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: !isProduction,
                    },
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: !isProduction
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: !isProduction
                    }
                },
            ]
        }
        , {
            test: /\.(png|jpe?g|gif|svg)$/,
            include: /image/,
            loader: "url-loader",
            query: {
                limit: 1,
                name: "asset/images/[hash:16].[ext]"
            }
        },
        {
            test: /\.(ttf|woff2?|eot|svg)$/,
            include: /font/,
            loader: "url-loader",
            query: {
                limit: 1,
                name: "asset/fonts/[name].[hash:7].[ext]"
            }
        }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: isProduction ? '[name].[contenthash].css' : '[name].css'
        }),
        new HtmlPlugin({
            filename: "index.html",
            title: "AWD",
            template: path.resolve("src/index.html"),
            showErrors: true,
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         domain: JSON.stringify(env.domain),
        //         host: JSON.stringify(env.host),
        //     },
        // }),
    ]
}
