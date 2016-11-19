var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js' // make sure filename, not fileName
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.sass$/,
				loaders: ['style', 'css', 'sass-loader'],
				exclude: /flexboxgrid/
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules',
				include: /flexboxgrid/
			},
			{
				test: /\.json$/,
				loaders: ['json-loader']
			}
		]
	},
	plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}
