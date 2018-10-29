/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}

// TODO

Ayay.prototype.push = function() {
    for(var i = 0; i<arguments.length; i++){
    this[this.length] = arguments[i];
    this.length++;
    }
};

Ayay.prototype.pop = function() {
    if(this.length>0){
        var element = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return element;
    }
};

Ayay.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    
    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
    
};

Ayay.prototype.map = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    returnayay = new Ayay;
    for (var i = 0; i < this.length; i++) {
        returnayay[i]=callback(this[i], i, this);
        returnayay.length++;
    }
    return returnayay;
};

Ayay.prototype.sort = function() {
    
    var temp;
    //debugger
    for(var j=0; j<this.length-1; j++){
        for(var i=0; i<this.length-1; i++){
            if(this[i]>this[i+1]){
                temp=this[i];
                this[i]=this[i+1];
                this[i+1]=temp;
            }
        }
        }
    return this;
};

Ayay.prototype.filter = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    newayay = new Ayay;
    var j = 0;
    for(var i = 0; i<this.length; i++){
        if(callback(this[i])===true){
            newayay[j]=this[i];
            newayay.length++;
            j++;
        }
    }
    return newayay;
};

Ayay.prototype.find = function(callback) {

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for(var i = 0; i<this.length; i++){
        if(callback(this[i])===true){
            return this[i];
        }
    }
};