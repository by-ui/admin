const fs = require('fs');
const path = require('path');
const HtmlPlugin = require("html-webpack-plugin");

const pages = fs.readdirSync(path.resolve('src/'));


// ---------
let entry = {};

const modules = {
    rules: []
};

let plugins = [];

for (let page of pages) {
    // 先写一个利用node方法判断是不是文件夹的方法，但是行不通
    if (fs.statSync(path.resolve('src/',page)).isDirectory()) {
        entry[`${page}/index`] = [path.resolve(`src/${page}/index.ts`)];
        const imageReg = new RegExp(`[\\\\/]${page}[\\\\/]images`);

        modules.rules.push({
            test: /\.(jpe?g|png|svg|bmp)$/,
            include: imageReg,
            loader: 'url-loader',
            query: {
                limit: 1,
                name: `${page}/assets/images/[hash:16].[ext]`
            }
        });

        plugins.push(
            new HtmlPlugin({
                filename: `${page}/index.html`,
                template: path.resolve(`src/${page}/index.html`),
                chunks: [`${page}/index`],
                minify: {
                    collapseWhitespace: true
                },
            })
        );
    }
}
module.exports = {
    entry,
    modules,
    plugins
};
