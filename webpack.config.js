const path = require('path');

module.exports = {
	entry: './src/webpackEntry.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'hitbox.dist.js',
		library: 'Hitbox',
		libraryTarget: 'umd',
	},
};
