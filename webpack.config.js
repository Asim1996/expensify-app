// entry -> output
const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// console.log(path.join(__dirname,'public'));

require('dotenv').config({ path: '.env' });
module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');
	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						},

					]
				})
			}]
		},
		plugins: [
			CSSExtract,
			new webpack.DefinePlugin({
				'process.env.REACT_APP_APIKEY': JSON.stringify(process.env.REACT_APP_APIKEY),
				'process.env.REACT_APP_AUTHDOMAIN': JSON.stringify(process.env.REACT_APP_AUTHDOMAIN),
				'process.env.REACT_APP_DATABASEURL': JSON.stringify(process.env.REACT_APP_DATABASEURL),
				'process.env.REACT_APP_PROJECTID': JSON.stringify(process.env.REACT_APP_PROJECTID),
				'process.env.REACT_APP_STORAGEBUCKET': JSON.stringify(process.env.REACT_APP_STORAGEBUCKET),
				'process.env.REACT_APP_MESSAGINGSENDERID': JSON.stringify(process.env.REACT_APP_MESSAGINGSENDERID),
				'process.env.REACT_APP_APPID': JSON.stringify(process.env.REACT_APP_APPID),
				'process.env.REACT_APP_MEASUREMENTID': JSON.stringify(process.env.REACT_APP_MEASUREMENTID),
			})
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	}
}
/*module.exports = {
	entry:'./src/app.js',
	output:{
		path:path.join(__dirname,'public'),
		filename:'bundle.js'
	},
	module: {
		rules:[{
			loader:'babel-loader',
			test:/\.js$/,
			exclude:/node_modules/
		},{
			test:/\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool:'cheap-module-eval-source-map',
	devServer:{
		contentBase: path.join(__dirname,'public'),
		historyApiFallback:true
	}
};*/