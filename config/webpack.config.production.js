'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const core = require("./webpack.core");
const webpackConfig = merge(core,{
    devtool: '#source-map',
    plugins: [
        new ClosureCompiler({
            options: {
                languageIn: 'ECMASCRIPT6',
                languageOut: 'ECMASCRIPT5',
                compilationLevel: 'ADVANCED',
                warningLevel: 'VERBOSE',
            },
        }),
        //new webpack.optimize.CommonsChunkPlugin('app','app.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
});
module.exports = webpackConfig;