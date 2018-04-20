const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

//插件实例

const html_w_p = new HtmlWebpackPlugin({template: './src/index.html'});
const copy_w_p = new CopyWebpackPlugin([
  {from: './src/images', to: './images'}
]);
const clean_w_p = new CleanWebpackPlugin(['dist']);


module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader",
        //   publicPath: "/dist"
        // })
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }

    ]
  },
  plugins: [
    html_w_p,
    copy_w_p,
    // new ExtractTextPlugin({
    //   filename: "bundle.css",
    //   disable: false,
    //   allChunks: true
    // }),
    clean_w_p
  ]

}