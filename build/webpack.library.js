const { merge } = require('webpack-merge') // 合并插件
const baseConfig = require('./webpack.base') // 公共配置

const pkg = require('../package.json') // 获取项目信息
// 驼峰名称
const hump = require('./tools/hump')
const humpName = hump(pkg.name)

const webpack = require('webpack')
const pathJoin = (filePath) => require('path').resolve(__dirname,filePath)

module.exports = merge(baseConfig, {
    entry: pathJoin( '../' + pkg.entry + '/' + 'index.ts'), // 入口文件
    output: {
        filename: 'index.js', // 输出文件
        library: humpName, // 暴露到浏览器环境的全局变量名称
        libraryTarget: 'umd', // 指定模块化规范
        globalObject: 'this', // 防止node端self报错
        clean: true, // 清除上一次
    },
    plugins: [
        // 输出项目信息
        new webpack.BannerPlugin(`
            ${pkg.name}
            @description: ${pkg.description} \n
                          ${pkg.descriptionCN} \n
            @version ${pkg.version} \n
            Released under the MIT License.
            hash: [hash]
        `),
    ],
})