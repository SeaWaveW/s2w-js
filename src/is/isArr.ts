/**
 * 判断值是否为 数组 类型
 * @param value 
 * @returns boolean
 */
const isArr = (value: any): boolean => {
    // return Array.isArray(value)
    return value instanceof Array
}
export default isArr