// 路径模块
const { resolve } = require('path')
// 文件模块
const fs = require('fs')
// 获取项目信息
const pkg = require('../../package.json')
// 获取入口路径
const entryPath = resolve(__dirname, '../../', pkg.entry)

// 驼峰
const hump = require('../tools/hump')
const humpName = hump(pkg.name)

// 引用内容生成
const {
    importList,
    exportList,
    defaultList,
    scriptList,
    readmeImportList,
    readmeUseList
} = require('./contentCreate')(pkg, humpName, entryPath)

// 入口文件生成
require('./entryCreate')(pkg, humpName, importList, exportList, defaultList, scriptList)

// 获取命令行参数
const { type } = require('minimist')(process.argv.slice(2))
// 若存在类型，则为发布
if(type){
    // 更新版本
    const { scripts,version } = pkg
    const prevVersion = version.split('.')
    if(scripts['build-small'].includes(type)){
        prevVersion[2] = parseInt(prevVersion[2]) + 1
    }
    else if(scripts['build-middle'].includes(type)){
        prevVersion[1] = parseInt(prevVersion[1]) + 1
        prevVersion[2] = 1
    }
    else if(scripts['build-large'].includes(type)){
        prevVersion[0] = parseInt(prevVersion[0]) + 1
        prevVersion[2] = 1
    }
    pkg.version = prevVersion.join('.')
    // 更新入口
    pkg.main = pkg.output + '/' + 'index.js'
    // 更新项目信息
    fs.writeFileSync(
        resolve(__dirname,'../../package.json'),
        JSON.stringify(pkg,'','\t')
    )
    // 更新说明文件
    require('./readmeCreate')( pkg, humpName, readmeImportList, readmeUseList )
}