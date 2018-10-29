/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}


Ayay.prototype.push = function(element) {
    if (element === 'undefined' || element === null) throw Error (element + ' is undefined')

    this[this.length] = element;

    this.length++;
};

Ayay.prototype.pop = function() {
    if (!this.length) throw Error ('object is empty');

    var word = this[this.length -1];
    this.length--;
    return word;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var newAyay = new Ayay;

    for (var i = 0; i < this.length; i++) {
        newAyay[i] = callback(this[i], i, this);}

    return newAyay;
};


Ayay.prototype.filter = function(callback) {
    var result = new Ayay;

    if (!(callback instanceof Function)) throw Error ('element is not an function');

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
        result.push(this[i]) 
        }
    }
    return result;
};

Ayay.prototype.find = function(callback) {
    if (!(this instanceof Object)) throw Error ('Arr is not a Object');

    if (!this.length) throw Error ('Arr is empty');

    if (typeof callback !== 'function') throw Error ('Callback is not a function')
    
    for (var i = 0; i < this.length; i++) if (callback(this[i])) return this[i]; 
};


Ayay.prototype.sort = function() {

    if (!this.length) throw Error ('element is empty');

    var temp;

    for(var i = 0; i < this.length; i++) this[i] = this[i].toString();

    for(var j = 0; j < this.length; j++) {
        for(var i = 0; i < this.length; i++) {
            if (this[i] < this[i-1]) {
                temp = this[i];
                this[i] = this[i-1];
                this[i-1] = temp;
            }
        }
    }  
    return this;
};