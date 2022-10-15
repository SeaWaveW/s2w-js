
const moment = require('moment') // 时间库

const fs = require('fs')
const path = require('path')

// 获取项目信息
const pkg = require('./package.json')

// 设置打包出口文件
pkg.main = pkg.name + '-min.js'

// 获取命令行参数
const { mode, type } = require('minimist')(process.argv.slice(2))

// 是否为发布模式
const isPublish = mode === 'production'

// 更新打包模式
pkg.mode = mode

// 获取操作时间
pkg.buildDate = moment().format('YYYY-MM-DD HH:mm:ss')

// 若为发布操作-更新package.json内容
if(isPublish){
    // 更新发布时间
    pkg.date = pkg.buildDate
    pkg.versionDates.push(pkg.date)
    // 更新版本
    const { scripts,version } = pkg
    const prevVersion = version.split('.')

    if(scripts['publish-small'].includes(type)){
        prevVersion[2] = parseInt(prevVersion[2]) + 1
    }
    else if(scripts['publish-middle'].includes(type)){
        prevVersion[1] = parseInt(prevVersion[1]) + 1
        prevVersion[2] = 1
    }
    else if(scripts['publish-large'].includes(type)){
        prevVersion[0] = parseInt(prevVersion[0]) + 1
        prevVersion[2] = 1
    }
    pkg.version = prevVersion.join('.')
    const aliVDlength = pkg.date.length - pkg.version.length
    let versionSuffix = ''
    Array.from({length:aliVDlength}, () => versionSuffix+= ' ')
    console.warn(aliVDlength,versionSuffix,versionSuffix.length)
    pkg.versionLists.push(pkg.version + versionSuffix)
}


// 导入
const importList = []
// 按需导出
const exportList = []
// 全量导出
const exportDefaultList = []

// 生成导出
const createExport = ( dirPath, dirName) => {
    // 生成前缀
    const varPrefix = dirName === pkg.uiName ? pkg.uiPrefix : ''
    // 获取传入路径下的所有文件 并循环
    fs.readdirSync(dirPath).forEach(fileName => {
        // 获取对应文件的路径
        const filePath = path.resolve(dirPath,fileName)
        // 定义别名
        const fileNameAlias = fileName + 'S'
        // 若为文件夹则进行添加
        if(fs.lstatSync(filePath).isDirectory()){
            importList.push(
                `import ${fileNameAlias} from '${pkg.aliasPrefix + dirName + '/' + fileName}';`
            ) 
            exportList.push(
                `export const ${varPrefix + fileName} = ${fileNameAlias};`
            )
            exportDefaultList.push(varPrefix + fileName)

            // 检查是否存在index.js文件
            const indexPath = path.resolve(filePath,'./index.js')
            // 若不存在则进行创建
            if(!fs.existsSync(indexPath)){
                // 写入导出空方法
                fs.writeFileSync(indexPath, `export default () => {}`)
            }
        }
    })
} 

// 若子目录不为数组则进行转换
if(!Array.isArray(pkg.childDirList)) pkg.childDirList = []
// 若别名不为对象
if(!Object.prototype.toString.call(pkg.alias) === `[object Object]`) pkg.alias ={}
// 循环子目录
pkg.childDirList.forEach(dirName => {
    // 获取路劲
    const dirPath = path.resolve(__dirname, pkg.entryDir + '/' + dirName)
    // 若不存在该目录则创建
    if(!fs.existsSync(dirPath)) fs.mkdirSync(dirPath)
    // 更新别名
    pkg.alias[`${pkg.aliasPrefix + dirName}`] = pkg.entryDir + '/' + dirName
    // 生成导入导出
    createExport( dirPath, dirName)
})

// 更新项目信息
fs.writeFileSync(
    path.resolve(__dirname,'./package.json'),
    JSON.stringify(pkg,'','\t')
)

// 更新入口文件
fs.writeFileSync(
    path.resolve(__dirname, pkg.entryDir + '/' + pkg.entryName),

    importList.join('\n')
    + '\n\n'
    + exportList.join('\n')
    + '\n\n'
    + `export default {\n  ${exportDefaultList.join(',\n  ')} \n}`
)