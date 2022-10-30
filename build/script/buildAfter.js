const fs = require('fs')
const { resolve } = require('path')
fs.unlinkSync( resolve(__dirname, '../../dist/primitive.d.ts') )