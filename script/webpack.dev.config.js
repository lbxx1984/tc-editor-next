const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 8848,
        allowedHosts: 'all',
        open: true,
        client: {
            overlay: true
        }
    }
};
module.exports = merge(commonConfig, devConfig);
