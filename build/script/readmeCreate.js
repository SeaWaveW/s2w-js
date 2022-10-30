// 包裹符
const wChar = '```' 
// 换行符
const nChar = '\n'
// 文件模块
const fs = require('fs')
// 路径模块
const path = require('path')

module.exports = (pkg, humpName, readmeImportList, readmeUseList) => {
    const readmeContent = 
`
# ${pkg.name} 
${pkg.description} ${nChar}
## Install 
${wChar} shell 
npm install ${pkg.name} -S 
${wChar} ${nChar}
### On demand import 
${wChar} javascript 
import { 
  ${readmeImportList.join('\n  ')} 
} from '${pkg.name}' 
// or 
const { 
  ${readmeImportList.join('\n  ')} 
} = require('${pkg.name}') ${nChar}
// use 
${readmeUseList.join('\n')} 
${wChar} ${nChar}
### Complete introduction 
${wChar} javascript 
import ${ humpName } from '${pkg.name}' 
// or 
const ${ humpName } = require('${pkg.name}') ${nChar}
// use 
${humpName}.$XXX() 
${wChar} ${nChar}
## CDN 
${wChar} html 
<script src="https://cdn.jsdelivr.net/npm/${pkg.name}@${pkg.version}/${pkg.output}/${pkg.name}.min.js"></script> 
${wChar} 
${wChar} javascript 
${humpName}.$XXX() 
// or 
${pkg.author}.$XXX() 
${wChar}
`

    // 更新说明文件
    fs.writeFileSync(
        path.resolve(__dirname, '../../README.md'),
        readmeContent
    )
}