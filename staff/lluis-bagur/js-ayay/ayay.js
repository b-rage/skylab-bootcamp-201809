/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

Ayay.prototype.push = function(element) {
    this[this.length] = element;

    this.length++;
};

Ayay.prototype.pop = function(arr) {

        var last = this[this.length-1];
           this.length--
   
           return this;
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    

        var arr=[];
        for (var i=0; i<this.length; i++){
            arr[i] = callback(this[i]);
        }
        return arr;
};

Ayay.prototype.sort = function() {
    // TODO
};

Ayay.prototype.filter = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var array = [];
    var cont = 0;
    for (var i=0; i<this.length; i++){
        if(callback(this[i])){
            array[cont] = this[i];
            cont++;
        }   
    }

    return array;
};

Ayay.prototype.find = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if (!this.length) throw Error ("Ayay is empty");

    for (var i=0; i<this.length; i++){
            if(callback(this[i])){
                return this[i];
        }   
    }
    
};