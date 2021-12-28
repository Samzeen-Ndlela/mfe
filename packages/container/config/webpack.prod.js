const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig =require('./webpack.common');
const packageJson = require('../package.json');  //for webpack to take care of shared modules

const domain = process.env.PRODUCTION_DOMAIN;             //environmnt variable (ci/cd pipeline)

const prodConfig = {
       mode: 'production',
       output: {
           filename: '[name].[contenthash].js'
       },
       plugins: [
           new ModuleFederationPlugin({
               name: 'container',
               remotes: {
                   marketing: `marketing@${domain}/marketing/remoteEntry.js` 
               },
               shared: packageJson.dependencies,
           }),
       ] ,
};

module.exports = merge(commonConfig, prodConfig);

