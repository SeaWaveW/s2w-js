const pkg = require('./package.json') // 获取项目信息

const pathJoin = (filePath) => require('path').resolve(__dirname,filePath)

// 代码压缩
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: pkg.mode, // 打包模式
    entry: pathJoin( pkg.entryDir + '/' + pkg.oldEntryName), // 入口文件
    output: {
        path: pathJoin(`./${pkg.outputDir}`), // 输出目录
        filename: pkg.outputNameIe8, // 输出文件
        clean: false, // 清除上一次
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
    // 特性
    experiments: {
        topLevelAwait: true, // webpack5必须开启,可直接使用await，不需要于async搭配
    },
    resolve: {
        extensions:['.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader'
                ],
                exclude: /node_modules/,
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer:[
            new TerserWebpackPlugin({
                terserOptions:{
                    ie8: true,
                    safari10: true
                },
            })
        ]
    }
}