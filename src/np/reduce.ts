import { minus as minusNP } from 'number-precision'
import isArr from '../is/isArr';

/**
 * 减法
 * @param minuend 数组：[ 被减数，减数, .... ]  或 被减数
 * @param subtract 减数
 * @returns number
 */
const reduce = ( minuend:Array<any>|any, subtract: any ):number => {
    if( isArr(minuend) ){
        if(minuend.length === 1){
            throw new Error('Subtract number has not been passed in')
        }
        else{
            return minusNP(...minuend)
        }
    }else{
        if(!subtract){
            throw new Error('Subtract number has not been passed in')
        }
        else{
            return minusNP(minuend, subtract)
        }
    }
}

export default reduce