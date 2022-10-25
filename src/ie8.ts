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
  forEach: forEachS,
  initial: initialS,
  random: randomS,
  except: exceptS,
  plus: plusS,
  reduce: reduceS,
  ride: rideS 
}