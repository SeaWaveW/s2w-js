import isArr from "./isArr"
import isFun from "./isFun"
import isObj from "./isObj"
import isJQ from "./isJQ"
/**
 * 判断值是否为 NaN 类型
 * @param value 
 * @returns boolean
 */
 const isNan = (value: any): boolean => {
    return !isArr(value) && !isFun(value) && !isObj(value) && !isJQ(value) && value !== value
}
export default isNan