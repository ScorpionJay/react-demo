'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: {
    app:path.join(__dirname, '../src/index'),
    commons:[
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk',
      'jquery'
    ]
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js')
    //,
    // function() {
    //   this.plugin("done", function(stats) {
    //     let htmlPath = path.join(__dirname, '../dist/index.html')
    //     let htmlText = fs.readFileSync(htmlPath, {encoding:'utf-8'})
    //     let assets = stats.toJson().assetsByChunkName
    //     Object.keys(assets).forEach((key)=>{
    //       let fileNames = assets[key];
    //       ['js', 'css'].forEach(function(ext){
    //         htmlText = htmlText.replace(key+'.'+ext, fileNames.find(function(item){
    //           return new RegExp(key+'\\.\\w+\\.'+ext+'$').test(item)
    //         }))
    //       })
    //     })

    //     fs.writeFileSync( htmlPath, htmlText)
    //   });
    // }


  ],
  module: defaultSettings.getDefaultModules()
  
});



config.module.loaders = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
  },
  {
    test: /\.less/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
  },
  {
    test: /\.(png|jpg|gif|woff|woff2)$/,
    loader: 'url-loader?limit=8192'
  }
]


// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

// 添加hash后缀
config.output.filename = 'app.js';

module.exports = config;
