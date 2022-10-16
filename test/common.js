// const sw = require('../dist/sw-js-min.js')
// sw.test()

const {each, random} = require('../dist/s2w-js-min.js')
// each(10).for((item,index) =>  {
//     console.error('num',item,index)
// })
// each('a').for((item,index) =>  {
//     console.error('str',item,index)
// })

// const obj1 = function () {}
// obj1.prototype.a = 'haha'
// const obj2 = new Function('return ' + obj1.toString())()
// console.error( Object.keys(obj1.prototype) ) 

console.log( random(0,11,false) )