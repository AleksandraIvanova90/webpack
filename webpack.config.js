
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
      },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader, 'css-loader',
            ],
          }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: "./main.html"
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      compress: true,
    },
}