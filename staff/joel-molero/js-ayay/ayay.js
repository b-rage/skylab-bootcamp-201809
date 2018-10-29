/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function(element) {
    this[this.length] = element;

    this.length++;
};


Ayay.prototype.pop = function() {
    var result = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return result;
};


 Ayay.prototype.forEach = function(callback) {

    if (typeof callback !== 'function') throw new TypeError('callback is not a function');

     for (var i = 0; i < this.length; i++) callback(this[i], i, this);

};


 Ayay.prototype.map = function(callback) {

    if (typeof callback !== 'function') throw new TypeError('callback is not a function');
     var result = new Ayay();

    for (var i = 0; i < this.length; i++) {
        result[i] = callback(this[i], i, this);
        result.length++;
    }

    return result;
};


 Ayay.prototype.sort = function() {
    // TODO
};


 Ayay.prototype.filter = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function')
         var newArr = new Ayay()
         for (let i=0; i<this.length; i++) {
            if (callback(this[i])) newArr.push(this[i])
        }
         return newArr
};


 Ayay.prototype.find = function(callback) {
    // TODO
};