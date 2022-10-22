export declare const isArr: (value: any) => boolean;
export declare const isBoo: (value: any) => boolean;
export declare const isEnum: (value: any) => boolean;
export declare const isFun: (value: any) => boolean;
export declare const isJQ: (value: any) => boolean;
export declare const isNan: (value: any) => boolean;
export declare const isNull: (value: any) => boolean;
export declare const isNum: (value: any) => boolean;
export declare const isObj: (value: any) => boolean;
export declare const isStr: (value: any) => boolean;
export declare const isUnd: (value: any) => boolean;
export declare const browser: () => {
    name: string;
    version: string;
};
export declare const color: (color1: string, color2: string, ratio: number) => string;
export declare const each: (value: any) => {
    for: Function;
};
export declare const random: (start: number, end: number, float: number) => number;
declare const _default: {
    isArr: (value: any) => boolean;
    isBoo: (value: any) => boolean;
    isEnum: (value: any) => boolean;
    isFun: (value: any) => boolean;
    isJQ: (value: any) => boolean;
    isNan: (value: any) => boolean;
    isNull: (value: any) => boolean;
    isNum: (value: any) => boolean;
    isObj: (value: any) => boolean;
    isStr: (value: any) => boolean;
    isUnd: (value: any) => boolean;
    browser: () => {
        name: string;
        version: string;
    };
    color: (color1: string, color2: string, ratio: number) => string;
    each: (value: any) => {
        for: Function;
    };
    random: (start: number, end: number, float: number) => number;
};
export default _default;
