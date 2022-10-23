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

window['s2w'] = {
  isArr: isArrS,
  isBoo: isBooS,
  isEnum: isEnumS,
  isFun: isFunS,
  isJQ: isJQS,
  isNan: isNanS,
  isNull: isNullS,
  isNum: isNumS,
  isObj: isObjS,
  isStr: isStrS,
  isUnd: isUndS,
  browser: browserS,
  color: colorS,
  each: eachS,
  random: randomS 
}