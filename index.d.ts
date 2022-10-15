export type isSeries = (value:any) => boolean
declare function isEnum(value:any):string
declare function isStr(value:any):boolean
declare function isNum(value:any):boolean
declare function isBoo(value:any):boolean
declare function isFun(value:any):boolean
declare function isArr(value:any):boolean
declare function isObj(value:any):boolean

declare namespace s2w{
    isJQ: isJQ,
    isEnum,
    isStr,
    isNum,
    isBoo,
    isFun,
    isArr,
    isObj
}