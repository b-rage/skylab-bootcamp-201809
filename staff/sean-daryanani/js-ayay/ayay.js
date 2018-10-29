/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function() {
    var pointer = this;
    Array.prototype.forEach.call(arguments, function(el) {
        pointer[pointer.length] = el;
        pointer.length++;
    })
    return this.length;
};

Ayay.prototype.pop = function() {
    var popped = this[this.length-1];
    delete this[this.length-1];
    if (this.length>0) this.length = this.length-1;
    return popped;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var newArr = new Ayay();
    for (var i=0; i<this.length; i++) {
        newArr.push(callback(this[i],i, this));
    }
    return newArr;
};

Ayay.prototype.sort = function() {
    for (var i=0; i < this.length-1; i++) {
        for (var j=0; j< this.length; j++) {
            if (this[j] > this[j+1]) {
                var temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    return this;
};

Ayay.prototype.filter = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    var newArr= new Ayay();
    for (var i=0; i<this.length; i++) {
        if (callback(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr;
};

Ayay.prototype.find = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i=0; i<this.length; i++) {
        if (callback(this[i])) return this[i];
    }
};

Ayay.prototype.join = function(element) {
    var outputString = this[0];
    if (element === undefined) {
        for (var i = 1; i < this.length; i++) {
            outputString += "," + this[i];
        }
    } else {
        for (var i = 1; i < this.length; i++) {
            outputString += element + this[i];
        }
    }
    if (!this.length) {
        return outputString = "";
    }
    return outputString;
}