/**
 * ?
 * 
 */

class Ayay {
    constructor () {
    this.length = 0;
    }
    
    push(element) {
        //if (!(this instanceof Ayay)) throw new TypeError ('push can not be applied to this element')
        for (var i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    };

    pop() {
        let result = this[this.length-1];
        delete this[this.length -1];
        if (this.length > 0) this.length--;
        return result;
    };

    forEach(callback) {
        // if (!(this instanceof Ayay)) throw new TypeError('.forEach can not be applied to this element');
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    
        for (var i = 0; i < this.length; i++) callback(this[i], i, this);
    };

    map(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

        let result = new Ayay;
        for (var i = 0; i < this.length; i++){
            result.push(callback(this[i], i,this));
        }
        return result;
    };

    sort() {
        let temp;

        for (var j = 0; j < this.length -1; j++){
            for (var i = 0; i < this.length; i++){
                if (this[i] > this[i+1]){
                    temp = this[i];
                    this[i] = this[i+1];
                    this[i+1] = temp;
                }
            }
        }
        return this;

    };

    filter(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

        let result = new Ayay;
        for (var i = 0; i < this.length; i++){
        if(callback(this[i])) result.push((this[i])); 
        }
        return result;
    };

    find(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

        for (var i = 0; i < this.length; i++){
        if(callback(this[i])) return (this[i]); 
        }
    };


}


