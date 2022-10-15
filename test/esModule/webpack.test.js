
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'./index.js'),
    output:{
        filename: 'js/[name].js', // 文件名称
        path: path.resolve(__dirname,'./server'), // 文件路径
        environment: {
            arrowFunction: false ,// 打包后箭头函数
            bigIntLiteral: false, // 支持整型
            const: false, // 支持const let
            destructuring: false, // 支持结构赋值
            dynamicImport: false, // 支持异步import
            forOf: false, // 支持for of 循环
            module: false, // 支持 esModule
            optionalChaining: false, // 支持对象深度 .?
            templateLiteral: false,  // 支持模版文字
        },
    },
    devServer: {
        open: true,
        port: 8378,
        hot: true,
        static: {
            directory: path.resolve(__dirname, './server'),
            publicPath: '/server',
        },
        historyApiFallback: true, // 当url为index以外的，则会重定向至index.html,部署时需要ng配置
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./index.html'),
            filename: `index.html`,
            title: 'esModule',
            inject: 'body',
        })
    ]
}