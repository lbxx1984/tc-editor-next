const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlTplFactory = require('./htmlTplFactory');


module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader?cacheDirectory=true']
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            templateContent: htmlTplFactory({
                title: 'TcEditor Next!'
            })
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        }
    },
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
        maxMemoryGenerations: Infinity
    }
};
