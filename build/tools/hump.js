module.exports = (str) =>{
    let arr = str.split(`-`);
    arr[1] = arr[1].toLocaleUpperCase()
    return arr.join('');
}