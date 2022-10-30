const s2wJS = require('s2w-js')
console.log('s2wJS',s2wJS.isBoo(1),s2wJS.isBoo(false))
const { isBoo } = require('s2w-js')
console.log('isBoo',isBoo(true),isBoo('2'))