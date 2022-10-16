/**
 * 判断值是否为 JQuery 类型
 * @param value 
 * @returns boolean
 */
const isJQ = (value: any): boolean => {
    return value instanceof jQuery
}
export default isJQ