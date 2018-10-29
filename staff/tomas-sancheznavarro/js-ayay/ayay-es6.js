/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO
Ayay.prototype.push = function () {

    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
};

Ayay.prototype.pop = function () {
    if (arguments.length) throw Error('input is not required in pop');

    if (this.length > 0) {
        var element = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return element;
    } else {
        return undefined;
    }
};

Ayay.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if (!arguments.length) throw new Error('input is empty')

    return_ayay = new Ayay;
    for (var i = 0; i < this.length; i++) {

        return_ayay[i] = callback(this[i], i, this);
        return_ayay.length++;
    }
    return return_ayay;
};

Ayay.prototype.sort = function () {
    for (var j = 0; j < this.length; j++) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] < this[i - 1]) {
                var temp = this[i - 1];
                this[i - 1] = this[i];
                this[i] = temp;
            }
        }
    }
    return this;
};

Ayay.prototype.filter = function (callback) {
    if (!arguments.length) throw new Error('input is empty');

    var new_arr = new Ayay;
    for (var i = 0; i < this.length; i++) {

        if (callback(this[i])) {
            new_arr.push(this[i]);
        }
    }
    return new_arr;
};

Ayay.prototype.find = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');


    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        } else {
            if (callback(this[i]) === -1)
                return undefined;
        }
    }
};