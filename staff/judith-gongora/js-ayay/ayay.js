/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function(element) {
    if (element !== undefined){
    this[this.length] = element;
    this.length++;
    }
    return this.length;
};

Ayay.prototype.pop = function() {
    var del;
    if (this.length>0){
        del = this[this.length-1];
        delete this[this.length-1]
        this.length--;
        return del;
    }
    return undefined;
    
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var arr = new Ayay;
    for (var i = 0; i < this.length; i++) 
        arr.push(callback(this[i], i, this));
    return arr;
};

Ayay.prototype.filter = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var arr = new Ayay;
    for (var i = 0; i < this.length; i++)
        if (callback(this[i], i, this)) arr.push(this[i]);
    return arr;
};

Ayay.prototype.find = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var arr = new Ayay;
    for (var i = 0; i < this.length; i++)
        if (callback(this[i], i, this)) return this[i];
    return undefined;
};

Ayay.prototype.sort = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var arr= new Ayay;
    for (i=0;i<this.length;i++){
        arr.push(this[i]);
    }
    var e=0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                e = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = e;
            }
        }
    }
    return arr;
};
