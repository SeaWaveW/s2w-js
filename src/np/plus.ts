import { plus as plusNP } from 'number-precision'
import isArr from '../is/isArr';

/**
 * 加法
 * @param augend 数组：[ 被加数，加数, .... ]  或 被加数
 * @param addend 加数
 * @returns number
 */
const plus = ( augend:Array<any>|any, addend: any ):number => {
    if( isArr(augend) ){
        if(augend.length === 1){
            throw new Error('The addend has not been passed in')
        }
        else{
            return plusNP(...augend)
        }
    }else{
        if(!addend){
            throw new Error('The addend has not been passed in')
        }
        else{
            return plusNP(augend, addend)
        }
    }
}

export default plus