// 路径模块
const path = require('path')
// 文件模块
const fs = require('fs')

module.exports = (pkg, humpName, importList, exportList, defaultList, scriptList) => {
// 更新库文件
fs.writeFileSync(
    path.resolve(__dirname, `../../${pkg.entry}/index.ts`),
`
${ importList.join('\n') }
${ exportList.join('\n') }
export default {
    ${ defaultList.join(',\n    ') }
}
`
)
// 更新原生文件
fs.writeFileSync(
    path.resolve(__dirname, `../../${pkg.entry}/primitive.ts`),
`
${importList.join('\n')}
window['${humpName}'] = {
    ${defaultList.join(',\n    ')}
}
if(!window['${pkg.author}']){
    window['${pkg.author}'] = {}
}
${ scriptList.join('\n') }
`
)

}