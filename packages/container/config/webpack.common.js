const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = { 
    
    module:{
        rules:[
            {    //define a loader  
                test: /\.m?js$/,
                exclude: /node_modules/,   //do not run the run APP outside these modules
                use:{
                       loader: 'babel-loader',
                         options:{
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],

                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', 
        }),
    ],
};