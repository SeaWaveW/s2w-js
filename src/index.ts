import isArrS from './is/isArr';
import isBooS from './is/isBoo';
import isEnumS from './is/isEnum';
import isFunS from './is/isFun';
import isJQS from './is/isJQ';
import isNanS from './is/isNan';
import isNullS from './is/isNull';
import isNumS from './is/isNum';
import isObjS from './is/isObj';
import isStrS from './is/isStr';
import isUndS from './is/isUnd';
import browserS from './utils/browser';
import colorS from './utils/color';
import eachS from './utils/each';
import randomS from './utils/random';

export const isArr = isArrS;
export const isBoo = isBooS;
export const isEnum = isEnumS;
export const isFun = isFunS;
export const isJQ = isJQS;
export const isNan = isNanS;
export const isNull = isNullS;
export const isNum = isNumS;
export const isObj = isObjS;
export const isStr = isStrS;
export const isUnd = isUndS;
export const browser = browserS;
export const color = colorS;
export const each = eachS;
export const random = randomS;

export default {
  isArr,
  isBoo,
  isEnum,
  isFun,
  isJQ,
  isNan,
  isNull,
  isNum,
  isObj,
  isStr,
  isUnd,
  browser,
  color,
  each,
  random 
}