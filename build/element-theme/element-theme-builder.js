const fs = require('fs');
const et = require('element-theme');
const files = fs.readdirSync('./build/element-theme');
const color = require('colors-cli');

const variablesPath = './build/element-theme/element-variables.scss';

if (files.indexOf('element-variables.scss') < 0) {
    et.init(variablesPath);
};

fs.exists("./_intermediate/element-ui-theme", exists => {
    if (!exists) {
        fs.mkdir('./_intermediate', error => {});
        fs.mkdir('./_intermediate/element-ui-theme/', error => {})
    }
});

et.run({
    config: variablesPath,
    out: '_intermediate/element-ui-theme',
    minimize: false
}, () => {
    console.log(`${color.green('✔')} Element Theme Build Success \n`);
});
