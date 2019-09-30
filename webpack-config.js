const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'./dist/bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js||jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                  loader:'html-loader'
                }
            },        
            {
                test:/\.css$/,
                use:[MiniCSSExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new MiniCSSExtractPlugin({
            template:'[name].css',
            chunkFilename:'[id].css'
        })
    ]
}