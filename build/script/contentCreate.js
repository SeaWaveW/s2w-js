// 路径模块
const path = require('path')
// 文件模块
const fs = require('fs')

module.exports = (pkg, humpName, entryPath) => {
    // 列表
    const importList = [] // 导入
    const exportList = [] // 单导出
    const defaultList = [] // 全到处
    const scriptList = [] // 原生列表

    // 说明列表
    const readmeImportList = []
    const readmeUseList = []

    // 入口文件夹递归方法
    const captureTools = ( destPath ) => {
        // 遍历路径
        fs.readdirSync(destPath).forEach(fileName => {
            // 获取文件路径
            const filePath = path.resolve(destPath, fileName)
            // 是否为库文件
            const isLabraryFile = filePath.replace(/\\/g,'/').includes(`${pkg.entry}/index.ts`)
            // 是否为
            const isPrimitiveFile = filePath.replace(/\\/g,'/').includes(`${pkg.entry}/primitive.ts`)
            // 当不为库、原生文件则处理
            if(!isLabraryFile && !isPrimitiveFile){
                // 当为文件夹则继续深入
                if(fs.lstatSync(filePath).isDirectory()){
                    captureTools(filePath)
                }
                // 否则进行处理
                else{
                    // 获取文件路径
                    const pathName = filePath.replace(/\\/g,'/').split('src')[1].replace('.ts','').replace('/','./')
                    // 定义文件名
                    let componentsName = fileName.replace('.ts','')
                    // 别名
                    const aliasName = componentsName + 'S'
                    // 更新列表
                    importList.push(`import ${aliasName} from '${pathName}'`)
                    exportList.push(`export const ${componentsName} = ${aliasName}`)
                    defaultList.push(`${componentsName}: ${aliasName}`)
                    readmeImportList.push(`${componentsName}`)
                    readmeUseList.push(`${componentsName}()`)
                    scriptList.push(`window['${pkg.author}'].${componentsName} = window['${humpName}'].${componentsName}`)
                }
            }
        })
    }

    // 捕获路径
    captureTools(entryPath)

    return {
        importList,
        exportList,
        defaultList,
        scriptList,
        readmeImportList,
        readmeUseList
    }
}