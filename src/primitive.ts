
import isArrS from './is/isArr'
import isBooS from './is/isBoo'
import isEnumS from './is/isEnum'
import isFunS from './is/isFun'
import isJQS from './is/isJQ'
import isNanS from './is/isNan'
import isNullS from './is/isNull'
import isNumS from './is/isNum'
import isObjS from './is/isObj'
import isStrS from './is/isStr'
import isUndS from './is/isUnd'
import exceptS from './np/except'
import plusS from './np/plus'
import reduceS from './np/reduce'
import rideS from './np/ride'
import browserS from './utils/browser'
import colorS from './utils/color'
import forEachS from './utils/forEach'
import initialS from './utils/initial'
import randomS from './utils/random'
window['s2wJS'] = {
    isArr: isArrS,
    isBoo: isBooS,
    isEnum: isEnumS,
    isFun: isFunS,
    isJQ: isJQS,
    isNan: isNanS,
    isNull: isNullS,
    isNum: isNumS,
    isObj: isObjS,
    isStr: isStrS,
    isUnd: isUndS,
    except: exceptS,
    plus: plusS,
    reduce: reduceS,
    ride: rideS,
    browser: browserS,
    color: colorS,
    forEach: forEachS,
    initial: initialS,
    random: randomS
}
if(!window['s2w']){
    window['s2w'] = {}
}
window['s2w'].isArr = window['s2wJS'].isArr
window['s2w'].isBoo = window['s2wJS'].isBoo
window['s2w'].isEnum = window['s2wJS'].isEnum
window['s2w'].isFun = window['s2wJS'].isFun
window['s2w'].isJQ = window['s2wJS'].isJQ
window['s2w'].isNan = window['s2wJS'].isNan
window['s2w'].isNull = window['s2wJS'].isNull
window['s2w'].isNum = window['s2wJS'].isNum
window['s2w'].isObj = window['s2wJS'].isObj
window['s2w'].isStr = window['s2wJS'].isStr
window['s2w'].isUnd = window['s2wJS'].isUnd
window['s2w'].except = window['s2wJS'].except
window['s2w'].plus = window['s2wJS'].plus
window['s2w'].reduce = window['s2wJS'].reduce
window['s2w'].ride = window['s2wJS'].ride
window['s2w'].browser = window['s2wJS'].browser
window['s2w'].color = window['s2wJS'].color
window['s2w'].forEach = window['s2wJS'].forEach
window['s2w'].initial = window['s2wJS'].initial
window['s2w'].random = window['s2wJS'].random
