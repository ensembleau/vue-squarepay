// Configure all webpack entry points here.
const bundles = [
	{ name: 'app.js', entry: ['babel-polyfill', './src/js/app.js'] },
	{ name: 'app.css', entry: './src/scss/app.scss' }
];

const EOL = require('os').EOL;
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractApp = new ExtractTextPlugin({ filename: '[name]', allChunks: true });
const extractVue = new ExtractTextPlugin({ filename: 'components.css', allChunks: true });
const production = process.env.NODE_ENV === 'production';

module.exports = {
	watch: !production,
	devtool: production ? 'source-map' : false,
	entry: (() => {
		let entries = { };
		bundles.forEach(bundle => entries[bundle['name']] = bundle['entry']);

		return entries;
	})(),
	output: {
		filename: '[name]',
		path: path.resolve(__dirname + '/public/dist/')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: extractApp.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader?outputStyle=' + (production ? 'compressed' : 'expanded')] })
			}, {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						sass: extractVue.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader?outputStyle=' + (production ? 'compressed' : 'expanded') }),
						css: extractVue.extract({ fallback: 'vue-style-loader', use: 'css-loader' })
					}
				}
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	plugins: [extractApp, extractVue].concat(production ? [
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
	]: [])
};