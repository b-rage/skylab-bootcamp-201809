function Ayay() {
    this.length = 0;
}

Ayay.prototype.push = function (element) {
    
    if (element === undefined) throw Error("you are trying to push an undefined value");    
    this[this.length] = element;
    this.length++;
};

Ayay.prototype.pop = function () {

    var returned;
    if (this.length > 0) {
        returned = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return returned;
    }
    return undefined;
};

Ayay.prototype.forEach = function (callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i);
};

Ayay.prototype.map = function (callback) {

    var output = [];
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    
    for (var i = 0; i < this.length; i++)
        output[i] = callback(this[i], i);
    
    return output;
};

Ayay.prototype.sort = function () {

    if (this.length <= 1) return this;

    for (var i = 0; i < this.length - 1; i++) {
        for (var j = 1; j < this.length; j++) {
            if (this[j] < this[j - 1]) {
                var aux_elem = this[j];
                this[j] = this[j - 1];
                this[j - 1] = aux_elem;

            }
        }
    }

    return this;
};

Ayay.prototype.filter = function (callback) {

    var output = [];
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if ((this.length === 0)) return output;

    for (var i = 0; i < this.length; i++) {

        if (callback(this[i], i)) {
            output.push(this[i]);
        }
    }
    return output;

};

Ayay.prototype.find = function (callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if ((this.length === 0)) return undefined;

    for (var i = 0; i < this.length; i++) {

        if (callback(this[i], i)) {
           return this[i];
        }
    }
    return undefined;
};