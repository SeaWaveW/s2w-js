import isNum from "../is/isNum"
import isStr from "../is/isStr"

/**
 * 数字或者字符串循环方法
 * --返回一个对象，对象中包含for方法
 * ----for方法的入参为回调函数，每次回调的入参为 值，下标
 * 若传入数字，则入参的方法的参数分别为 数字，下标
 * 若传入字符串，则入参的方法的参数分别为 值，下标
 * @param value 
 * @returns { 
 *  for: function ( callBack ) {
 *      callBack( value, index ) 
 *  }
 * }
 */
type eachObj = {
    for: Function
}
const each = (value: any):eachObj => {
    // 定义默认返回
    let forFun = ( callBack: Function ):void => {}

    if(isNum(value)){
        forFun = (callBack: Function) => {
            for(let i=0; i<value; i++ ){
                callBack(i+1, i)
            }
        }
    }
    else if(isStr(value)){
        forFun = (callBack: Function) => {
            for(let i=0; i<value.length; i++ ){
                callBack(value[i], i)
            }
        }
    }
    return {
        for: forFun
    }
}

export default each