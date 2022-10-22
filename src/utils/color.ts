/**
 * hash颜色融合
 * @param color1 颜色1
 * @param color2 颜色2
 * @param ratio 比例
 * @returns 
 */
const color = (color1:string, color2:string, ratio:number):string => {
    ratio = Math.max(Math.min(Number(ratio), 1), 0)
    let r1 = parseInt(color1.substring(1, 3), 16)
    let g1 = parseInt(color1.substring(3, 5), 16)
    let b1 = parseInt(color1.substring(5, 7), 16)
    let r2 = parseInt(color2.substring(1, 3), 16)
    let g2 = parseInt(color2.substring(3, 5), 16)
    let b2 = parseInt(color2.substring(5, 7), 16)
    let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
    let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
    let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
    return '#' + ('0' + (r || 0).toString(16)).slice(-2) + ('0' + (g || 0).toString(16)).slice(-2) + ('0' + (b || 0).toString(16)).slice(-2)
}

export default color