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
    if(element) this.length++;
    return this.length;
};

Ayay.prototype.forEach = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.pop = function() {
    
    poppedElem = this[this.length-1];
    this.length--;
    delete this[this.length];
    return poppedElem;
};

Ayay.prototype.map = function(callback) {
    var newAyay = new Ayay;

    //We have to iterate through the original ayay and return the values that passed the criteria in the callback
    
    for(var i=0; i<this.length; i++){
        if(callback(this[i], i)){newAyay.push = this[i]}
        console.log('Element with index: ' + i + ' and value: ' + this[i]);
    }

    console.log(newAyay);

    return newAyay;
};

Ayay.prototype.sort = function() {
    // TODO
};

Ayay.prototype.filter = function(callback) {
    // TODO
};

Ayay.prototype.find = function(callback) {
    // TODO
};