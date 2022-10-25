import { times as timesNP } from 'number-precision'
import isArr from '../is/isArr';

/**
 * 乘法
 * @param multiplicand 数组：[ 被乘数，乘数, .... ]  或 被乘数
 * @param multiplier 乘数
 * @returns number
 */
const ride = ( multiplicand:Array<any>|any, multiplier: any ):number => {
    if( isArr(multiplicand) ){
        if(multiplicand.length === 1){
            throw new Error('Multiplier has not been passed in')
        }
        else{
            return timesNP(...multiplicand)
        }
    }else{
        if(!multiplier){
            throw new Error('Multiplier has not been passed in')
        }
        else{
            return timesNP(multiplicand, multiplier)
        }
    }
}

export default ride