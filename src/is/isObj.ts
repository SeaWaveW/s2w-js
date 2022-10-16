/**
 * 判断值是否为 对象 类型
 * @param value 
 * @returns boolean
 */
const isObj = (value: any): boolean => {
    return Object.prototype.toString.call(value) === '[object Object]'
}
export default isObj