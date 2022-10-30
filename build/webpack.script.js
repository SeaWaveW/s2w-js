const { merge } = require('webpack-merge') // 合并插件
const baseConfig = require('./webpack.base') // 公共配置

const pkg = require('../package.json') // 获取项目信息

const pathJoin = (filePath) => require('path').resolve(__dirname,filePath)

module.exports = merge(baseConfig,{
    entry: pathJoin( '../' + pkg.entry + '/' + 'primitive.ts'), // 入口文件
    output: {
        filename: `${pkg.name}.min.js`, // 输出文件
        clean: false, // 清除上一次
    },
}) 