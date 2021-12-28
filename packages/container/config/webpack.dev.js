const { merge } = require('webpack-merge'); //merge is afunction that we can use to merge/combine two webpack projects
const ModuleFederationPlugin = require ('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require ('./webpack.common');
const packageJson = require('../package.json');


//Development-specific config
const devConfig = {
      mode: 'development',
      devServer: {
          port: 8084, //8080
          historyApiFallback: {
              index: 'index.html' ,
          },
      },
      plugins: [
          new ModuleFederationPlugin({
              name: 'container',
              remotes: {
                  marketing: 'marketing@http://localhost:8085/remoteEntry.js'
              },
              shared: packageJson.dependencies, 
          }),
      ],
};

module.exports = merge(commonConfig,devConfig);