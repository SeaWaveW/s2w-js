// es-new to es5
module.exports = {
    presets: [
        // 智能预设
        [
            "@babel/preset-env",
            {
                useBuiltIns: 'usage', // 按需自动引入
                corejs: 3, // 垫片版本
                targets: { // 浏览器版本
                    ie: 8 
                }
            }
        ]
    ],
    plugins: [
        'transform-es3-property-literals', // 关键字引号
        '@babel/plugin-transform-runtime', // 减少代码体积
        '@babel/plugin-syntax-top-level-await', // 顶层直接使用await，无需与async搭配(webpack5需要开启)
    ]
}