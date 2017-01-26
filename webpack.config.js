var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require('webpack');

module.exports = {
  entry: [
	'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  devServer: {
    contentBase: './',
    hot: true
  },
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
	  {test: /\.js$/, exclude: /node_modules/, loader: "react-hot!babel-loader"},
	  {test: /\.css$/, loader: "style-loader!css-loader"},
	  {test: /\.(jpg|png|jpeg)$/, loader: "url-loader?limit=25000"},
	  {test: /\.(jpg|png|jpeg)$/, loader: 'file-loader?name=[path][name].[hash].[ext]'},
	  {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]'}
    ]
  },
  plugins: [
	HTMLWebpackPluginConfig,
	new webpack.HotModuleReplacementPlugin()
  ]
};
