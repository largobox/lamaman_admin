const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack')


module.exports = {
    mode: 'development',

    entry: {
        app: path.resolve(__dirname, 'app', 'index.tsx'),
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/i,
                issuer: /\.tsx$/,
                use: ['@svgr/webpack'],
            }
        ],
    },

    plugins: [
        new Dotenv({ path: './.env' }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'system', 'static', 'index.html'),
            inject: false, 
        }),
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()]
    },
};
