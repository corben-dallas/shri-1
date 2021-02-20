const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
//////////////////////////////////////////////////////////////////////
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
	const optimizationConfig = {
		splitChunks: { chunks: 'all' },
	};

	if (isProd) {
		optimizationConfig.minimizer = [
			new OptimizeCssAssetsWebpackPlugin(),
			new TerserWebpackPlugin(),
		];
	}

	return optimizationConfig;
}

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: ['@babel/polyfill', './index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: `./[name].bundle.js` //TODO: rename
	},
	devServer: {
		port: 8080,
		open: true,
		compress: true,
		hot: true,
	},
	optimization: optimization(),
	plugins: [
		new HTMLWebpackPlugin({ 
			template: path.resolve(__dirname, 'src/index.html'),
			filename: 'index.html',
			minify: { collapseWhitespace: isProd }
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `./${filename('css')}`, // TODO: reanme
		}),
	],
	devtool: isProd ? false : 'source-map',
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					isProd ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader', 
					'sass-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	}
}