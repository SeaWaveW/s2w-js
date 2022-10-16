/**
 * 判断值是否为 方法 类型
 * @param value 
 * @returns boolean
 */
const isFun = (value: any): boolean => {
    return typeof value === 'function'
}
export default isFun