const pkg = require('./package.json') // 获取项目信息

const webpack = require('webpack')
const pathJoin = (filePath) => require('path').resolve(__dirname,filePath)

module.exports = {
    mode: pkg.mode, // 打包模式
    entry: pathJoin( pkg.entryDir + '/' + pkg.entryName), // 入口文件
    output: {
        path: pathJoin(`./${pkg.outputDir}`), // 输出目录
        filename: pkg.outputName, // 输出文件
        library: pkg.library, // 暴露到浏览器环境的全局变量名称
        libraryTarget: pkg.libraryTarget, // 指定模块化规范
        globalObject: pkg.globalObject, // 防止node端self报错

        clean: true, // 清除上一次
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
    plugins: [
        // 输出项目信息
        new webpack.BannerPlugin(`
            ${pkg.name}
            @description: ${pkg.description} \n
                          ${pkg.descriptionCN} \n
            @version ${pkg.version} \n
            @date ${pkg.date} \n
            @versions history\n
                ${pkg.versionLists.join(' , ')} \n
                ${pkg.versionDates.join(' , ')} \n
            Released under the MIT License.
            hash: [hash]
        `),
    ],
    resolve: {
        extensions:['.tsx', '.ts']
    },
    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     use:[
            //         'babel-loader'
            //     ],
            //     exclude: /node_modules/,
            //     // exclude: new RegExp(`(node_modules|${resourceName})`)
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
}