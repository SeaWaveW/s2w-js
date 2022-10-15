var fs = require('fs')
var os = require('os')
var cp = require('child_process')
var path = require('path')
var open = function (url) {
    var userInfo = os.userInfo()
    var chromePath = path.join(userInfo.homedir,
        'Local Settings\\Application Data\\Google\\Chrome\\Application\\chrome.exe')
    var openByIE = function () {
        cp.exec('start chrome ' + url, function (err, stdout, stderr) {
            if (err) {
                console.log(err)
            }
        })
    }
    fs.stat(chromePath, function (err) {
        if (err) {
            openByIE()
            return
        }
        cp.exec('start firefox ' + url, function (err, stdout, stderr) {
            if (err) {
                openByIE()
                return
            }
        })
    })
}
 
open( path.resolve(__dirname, './index.html') )