import isFun from '../is/isFun'
import isNum from "../is/isNum"
import isStr from "../is/isStr"
import isArr from '../is/isArr'
import isObj from '../is/isObj'
import isJQ from '../is/isJQ'

// 垫片
import '../shim/ForEach' 
import '../shim/Object-keys'

/**
 * 循环方法
 * @param value 值
 * @param callBack(params1,params2) 回调函数
 *        当为对象时params2则为属性，其他类型为下标
 * @param sort 排序
 *        默认为true - 回调参数为 (item,index)，对象时 - (value,key)
 *        为false时，- 回调参数为 (index,item)，对象时 - (key,value)
 */
const forEach = (value: any, callBack: Function, sort: Boolean = true) => {
    // 仅当回调函数存在才进行
    if( !isFun(callBack) ) throw new Error('You may need to pass in the second parameter, which is a callback method')
    // 当为数字类型时
    if( isNum(value)){
        for( let n = 0; n < value; n++ ){
            sort ? callBack( n+1, n ) : callBack( n, n+1 )
        }
    }
    // 当为字符串时
    if( isStr(value) ){
        for( let s = 0; s < value.length; s++ ){
            sort ? callBack( value[s], s ) : callBack( s, value[s] )
        }
    }
    // 当为数组时
    if( isArr(value) ){
        // 直接使用es的forEach方法
        value.forEach((item: any,index: any) => {
            sort ? callBack( item, index ) : callBack( index, item )
        })
    }
    // 当为对象时
    if( isObj(value) ){
        Object.keys(value).forEach(key => {
            sort ? callBack( value[key], key ) : callBack( key, value[key] )
        })
    }
    // 当为JQ时
    if( isJQ(value) ){
        value.each((index:number, item: JQuery) =>{
            sort ? callBack( item, index ) : callBack( index, item )
        })
    }
}

export default forEach