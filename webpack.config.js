const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'ejs-loader',
                        options: {
                            esModule: false, // Desativa o modo ES Modules
                            variable: 'data' // Define um escopo para as variáveis
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/styles.css'  // Ajuste se necessário
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'sobre.html',
            template: './public/sobre.ejs'  // Corrigido o caminho
        })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.sass']
    }
};
