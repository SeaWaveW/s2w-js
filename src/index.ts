import isArrS from './is/isArr';
import isBooS from './is/isBoo';
import isEnumS from './is/isEnum';
import isFunS from './is/isFun';
import isJQS from './is/isJQ';
import isNullS from './is/isNull';
import isNumS from './is/isNum';
import isObjS from './is/isObj';
import isStrS from './is/isStr';
import isUndS from './is/isUnd';
import eachS from './utils/each';
import randomS from './utils/random';

export const isArr = isArrS;
export const isBoo = isBooS;
export const isEnum = isEnumS;
export const isFun = isFunS;
export const isJQ = isJQS;
export const isNull = isNullS;
export const isNum = isNumS;
export const isObj = isObjS;
export const isStr = isStrS;
export const isUnd = isUndS;
export const each = eachS;
export const random = randomS;

export default {
  isArr,
  isBoo,
  isEnum,
  isFun,
  isJQ,
  isNull,
  isNum,
  isObj,
  isStr,
  isUnd,
  each,
  random 
}