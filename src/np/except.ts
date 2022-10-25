import { divide as divideNP } from 'number-precision'
import isArr from '../is/isArr';
/**
 * 除法
 * @param dividend 数组：[ 被除数，除数, .... ]  或 被除数
 * @param divisor 除数
 * @returns number
 */
const except = ( dividend:Array<any>|any, divisor: any ):number => {
    if( isArr(dividend) ){
        if(dividend.length === 1){
            throw new Error('The divisor has not been passed in')
        }
        else{
            return divideNP(...dividend)
        }
    }else{
        if(!divisor){
            throw new Error('The divisor has not been passed in')
        }
        else{
            return divideNP(dividend, divisor)
        }
    }
}

export default except