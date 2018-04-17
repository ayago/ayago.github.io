const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app/app.js',
        vendor: ['angular','angular-route']  
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['babel-loader']
			}
        ]
    },
    optimization: {
		splitChunks: {
			cacheGroups: {
                vendor: {
                    name: "vendor",
					enforce: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
			}
        },
        minimize: true
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new UglifyJsPlugin({
			sourceMap: true
		}), // for minifiying js
        new HtmlWebpackPlugin({
			template: './index.html'
        }), //use index.html and insert built resources into it
        new CleanWebpackPlugin('build'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = devConfig;