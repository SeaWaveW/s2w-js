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
import forEachS from './utils/forEach';
import initialS from './utils/initial';
import randomS from './utils/random';
import exceptS from './np/except';
import plusS from './np/plus';
import reduceS from './np/reduce';
import rideS from './np/ride';

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
export const forEach = forEachS;
export const initial = initialS;
export const random = randomS;
export const except = exceptS;
export const plus = plusS;
export const reduce = reduceS;
export const ride = rideS;

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
  forEach,
  initial,
  random,
  except,
  plus,
  reduce,
  ride 
}