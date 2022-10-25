// es5-forEach垫片
if(!Array.prototype.forEach){
    Array.prototype.forEach = function(fn, context) {
        var context = arguments[1];
        if(typeof fn !== "function") {
            throw new TypeError(fn + "is not a function");
        }
        for(var i = 0; i < this.length; i++) {
            fn.call(context, this[i], i, this);
        }
    };
}