/**
 * 判断值是否为 JQuery 类型
 * @param value 
 * @returns boolean
 */
const isJQ = (value: any): boolean => {
    return window.jQuery && value instanceof window.jQuery
}
export default isJQ