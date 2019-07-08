const path = require('path');
const template = path.join(__dirname,'template','index.html');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configureWebpack = require('./webpack.config');

module.exports = {
  outputDir: 'public',

    chainWebpack: config => {
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugins.delete('copy');
    },

    configureWebpack,
};