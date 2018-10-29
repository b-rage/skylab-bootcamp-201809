/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

Ayay.prototype.push = function () {
    if (!(this instanceof Ayay)) throw Error('array is not valid');

    for (var i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
    }
    
    return this.length;
};

Ayay.prototype.pop = function () {
    
    if (!(this instanceof Ayay)) throw Error('array is not valid');

    var element = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return element;
};

Ayay.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new Error(callback + ' is not a function');
    if (!(this instanceof Ayay)) throw Error('array is not valid');
    
    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new Error(callback + ' is not a function');
    if (!(this instanceof Ayay)) throw Error('array is not valid');

    var result = new Ayay;

    for (var i = 0; i < this.length; i++)
        result.push(callback(this[i], i, this));

    return result;
};


Ayay.prototype.sort = function () {

    if (!(this instanceof Ayay)) throw Error('array is not valid');

    for (var i = 0; i < this.length - 1; i++) {
        var min = i;
        for (var j = i; j < this.length; j++) {
            if ('' + this[j] < '' + this[min]) {
                min = j;
            }
        }

        var sorted = this[i];
        this[i] = this[min];
        this[min] = sorted;
    }
    return this;
};


Ayay.prototype.filter = function (callback) {
    if (typeof callback !== 'function') throw new Error(callback + ' is not a function');
    if (!(this instanceof Ayay)) throw Error('array is not valid');

    var index = 0;
    var indexResult = 0;
    //var result = [];
    var result = new Ayay;
    var flag = false;

    for (index = 0; index < this.length; index++) {

        flag = callback(this[index]);

        if (flag === true) {
            result.push(this[index]);
            indexResult++;
        }
    }

    return result;
};

Ayay.prototype.find = function (callback) {
    
    if (typeof callback !== 'function') throw new Error(callback + ' is not a function');
    
    for(var index=0; index<this.length; index++) { 
        if (callback(this[index])) { return this[index]; }
    }
    return undefined;
}