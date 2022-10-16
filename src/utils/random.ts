import isNum from "../is/isNum"
import isBoo from "../is/isBoo"
/**
 * 生成随机数
 * @param start 开始数字
 * @param end 结束数字
 * @param float 可为数字（最大为16）、布尔（为true则为16，为false则为0）
 * @returns number
 */

const random = (start: number, end: number, float: any):number => {
    // 定义起始
    const newStart:number = isNum(start) ? Math.round(start) : 0
    // 定义结束
    const newEnd:number = isNum(end) ? Math.round(end) : 1
    // 定义小数点个数: 为最大为16
    const floatSum: number = isBoo(float)
                     ? float
                        ? 16
                        : 0
                     : isNum(float)
                        ? float > 16
                            ? 16
                            : Math.floor(float)
                        : 0

    // 定义返回
    let result: number = 0
    // 若不存在小数点
    if(!floatSum) {
        result = Math.floor(Math.random() * (newEnd + 1))
        // 若是小于起始，则重新获取---内部活动为递归
        if(result < newStart){
            result = random(newStart, newEnd, floatSum)
        }
    }
    // 若存在小数点
    else {
        result = Math.random()*(newEnd+1)
        // 若是小于起始，则重新获取---内部活动为递归
        if(result < newStart){
            result = random(newStart, newEnd, floatSum)
        }
        // 设置小数点个数
        if(floatSum){
            // 按点分割
            const resultList: Array<string> = `${result}`.split('.')
            // 从下标为0开始截取
            resultList[1] = resultList[1].slice(0,floatSum)
            // 再按点拼接 再 转成数字
            result = Number(resultList.join('.'))
        }
    }
    return result
}

export default random