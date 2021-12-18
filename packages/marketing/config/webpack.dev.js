const { merge } = require('webpack-merge'); //merge is afunction that we can use to merge/combine two webpack projects
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require ('./webpack.common');
const packageJson =require('../package.json');


//Development-specific config
const devConfig = {
      mode: 'development',
      devServer: {
          port: 8085, //8081
          historyApiFallback: {
              index: 'index.html' ,
          },
      },
      plugins: [
          new ModuleFederationPlugin({
             name: 'marketing',
             filename:'remoteEntry.js',
             exposes: {
                 './MarketingApp': './src/bootstrap',
             },
             shared: packageJson.dependencies,         //OR YOU CAN SPECIFY DEPECINCIES ['react','react-dom']
               }),
          new HtmlWebpackPlugin({
              template: './public/index.html', 
          }),
      ],
};

module.exports = merge(commonConfig,devConfig);