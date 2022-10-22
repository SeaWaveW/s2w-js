/**
 * 获取浏览器信息
 * @returns {
 *      name: 浏览器名称
 *      version: 浏览器版本
 * }
 */
const browser = ()=> {

    const res = {
      name: "",
      version: "",
    };

    const { userAgent }  = navigator;

    let reg;
  
    if (reg = /edg\/([\d\.]+)/i.exec(userAgent)) {
      res.name = "Edge";
      res.version = reg[1];
    }
    else if (/msie/i.test(userAgent)) {
      res.name = "IE";
      res.version = /msie ([\d\.]+)/i.exec(userAgent)![1];
    }
    else if (/Trident/i.test(userAgent)) {
      res.name = "IE";
      res.version = /rv:([\d\.]+)/i.exec(userAgent)![1];
    }
    else if (/chrome/i.test(userAgent)) {
      res.name = "Chrome";
      res.version = /chrome\/([\d\.]+)/i.exec(userAgent)![1];
    }
    else if (/safari/i.test(userAgent)) {
      res.name = "Safari";
      res.version = /version\/([\d\.]+)/i.exec(userAgent)![1];
    }
    else if (/firefox/i.test(userAgent)) {
      res.name = "Firefox";
      res.version = /firefox\/([\d\.]+)/i.exec(userAgent)![1];
    }

    return res;
}

export default browser