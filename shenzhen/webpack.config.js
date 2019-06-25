const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {  
    entry: [
        './src/index.js'
    ],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '深圳公安v2.0.7'
        })
    ], 
    output: {
        filename:'[name].js', // 出口文件
        path:path.resolve(__dirname, 'dist')
    },  
    // devServer:{  
    //     contentBase:'./',  
    //     host:'localhost',  
    //     compress:true,  
    //     port:3000
    // }, 
    module: {
        rules:[
            {  
                test:/\.js$/,  
                exclude:/node_modules/, //排除哪些项目
                // loader:'babel-loader',  
                // options:{  
                //     presets:["es2015","react"]  
                // }  
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            // { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},
            { test: /\.(gif|png|jpe?g|svg)$/i, loader: "file-loader?name=images/[hash:8][name].[ext]" },
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //             name: '[name].[ext]',
            //             outputPath: 'images/'
            //             }
            //         },
            //         // 图片压缩
            //         // {
            //         //     loader: 'image-webpack-loader',
            //         //     options: {
            //         //         bypassOnDebug: true,
            //         //     }
            //         // }
            //     ]
            // },
            // 下面几行才是 html-loader 的配置内容  <img src="../images/logo.png">
            // {
            //     test: /\.html$/,
            //     use: [ {
            //     loader: 'html-loader',
            //     options: {
            //         minimize: true
            //     }
            //     }],
            // }
        ]  
    }  
}