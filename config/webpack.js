var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var path = require('path');

// compile js assets into a single bundle file 
module.exports.webpack={
    options:{
      devtool: 'eval',

    entry: {
      'polyfills': path.resolve(__dirname, '../assets/app/polyfills') ,
      'vendor': path.resolve(__dirname, '../assets/app/vendor'),
      'app':  path.resolve(__dirname, '../assets/app/main'),
    },

    output: {
      path: path.resolve(__dirname, '../.tmp/public'),
      publicPath: "/",
      filename: '[name].js',
      // chunkFilename: '[id].[hash].chunk.js'
    },

    resolve: {
      extensions: [
        '',
        '.js',
        '.ts',
        '.html',
        '.sass'
      ]
    },
     module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'ts-loader' , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders:[ 'raw-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.s(c|a)ss$/,
        exclude: path.resolve(__dirname, '../assets/styles') ,
        loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
      }
    ]
  },

  plugins: [
      new UglifyJsPlugin()
    ],

},

    
 
  // docs: https://webpack.github.io/docs/node.js-api.html#compiler 
  watchOptions: {
    aggregateTimeout: 300
  } 
};

