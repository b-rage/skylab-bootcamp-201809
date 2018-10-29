/**
 * ?
 * 
 */
// function Ayay() {
//     this.length = 0;
// }

class Ayay {
    constructor() {
        this.length = 0;
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }
    pop() {
        if (!this.length) return undefined;

        var temp = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return temp;
    }
    forEach(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

        for (var i = 0; i < this.length; i++)
            callback(this[i], i, this);
    }
    map(callback) {
        if (!this.length) throw Error('array is not valid');
        if (!(callback instanceof Function)) throw Error('callback is not a function');

        var temp = [];
        for (var i = 0; i < this.length; i++) {
            temp[i] = callback(this[i], i, this);
        }
        return temp;
    }
    sort() {
        if (!this.length) throw Error('array is empty');

        temp = [];
        for (var i = 0; i < this.length; i++) {
            this[i] = this[i];
        }
        for (var i = 0; i < this.length; i++) {
            temp[i] = this[i].toString();
            this[i] = temp[i];
        }
        for (var j = 1; j < this.length; j++) {
            for (var i = 1; i < this.length; i++) {
                if (this[i] < this[i - 1]) {
                    var temp = this[i - 1];
                    this[i - 1] = this[i];
                    this[i] = temp;
                }
            }
        }
        return this;
    }
    filter(callback) {
        if (!(this instanceof Ayay)) throw Error('first element is not an ayay');
        if (!(callback instanceof Function)) throw Error(callback + ' is not a function');

        var x, temp = [],
            count = 0;
        for (var i = 0; i < this.length; i++) {
            x = callback(this[i]);
            if (x == true) {
                temp[count] = this[i];
                count++;
            }
        }
        return temp;
    }
    find(callback) {
        if (!(this instanceof Ayay)) throw Error('first element is not an ayay');
        if (!(callback instanceof Function)) throw Error(callback + ' is not a function');

        var x;
        for (var i = 0; i < this.length; i++) {
            x = callback(this[i]);
            if (x == true) {
                return this[i];
            }
        }
    }
    slice(start, end) {
        if (!(this instanceof Ayay)) throw Error('ayay is not defined');
        if (!this.length) throw Error('ayay is not valid')
        if (typeof start !== "number" && typeof start !== 'undefined') throw Error('start is not valid');

        var temp = [],
            count = 0;
        //comprobamos si hay end
        if (end === undefined || end >= this.length) {
            end = this.length;
        } else {
            if (typeof end !== "number") throw Error('end is not valid');
        }
        if (start == undefined) {
            start = 0;
        }
        if (start < 0 && start < this.length) {
            count = this.length - 1 + start;
            for (var i = (this.length - 1 + start); i >= 0; i--) {
                temp[count] = this[i];
                count--;
            }
        } else if (start >= this.length) {
            temp = [];
        } else {
            //Start POSITIVO
            if (end > 0) {
                for (var i = start; i < end; i++) {
                    if (start + end == i) {
                        break;
                    }
                    temp[count] = this[i];
                    count++;
                }
            } else {
                if (start + end < 0) {
                    end = start;
                }
                count = -end - 1;
                for (var i = start; i > 0; i--) {
                    if (start + end == i) {
                        break;
                    }
                    temp[count] = this[i];
                    count--;
                }
            }
        }
        return temp;
    }
}
// TODO 10xfunction