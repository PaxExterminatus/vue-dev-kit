const path = require('path');
const template = path.join(__dirname,'template','index.html');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/main.ts', './src/main.scss'],
    },

    resolve: {
        extensions: ['.js', '.vue', '.jsx', '.ts' ],
        alias: {
            'lib': path.resolve(__dirname, './src/lib'),
            'js': path.resolve(__dirname, './src/lib/js'),
            'svg': path.resolve(__dirname, './src/lib/svg'),
            'time': path.resolve(__dirname, './src/lib/time'),
            'in': path.resolve(__dirname, './src/lib/input'),
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template,
        })
    ]
};