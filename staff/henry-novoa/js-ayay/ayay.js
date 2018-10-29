/**
 * ?
 * 
 */
function Ayay() {
    this.length = 0;
}
 

Ayay.prototype.push = function(element) {
     
if(!(arguments.length)) throw Error('an element to push is required');
    
    this[this.length] = element;

    this.length++;

    return this.length;
};

Ayay.prototype.pop = function() {
    
    if(arguments.length) throw Error('input not required');
    if(!(this.length)) throw Error('ayay is empty');
    var res;
    var res = this[this.length -1];
    delete this[this.length -1];
    this.length --;
    return res;
    
};

Ayay.prototype.forEach = function(callback) {
    if(!(arguments.length)) throw Error('input is empty');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if(!(this.length)) throw Error('ayay is empty');
   
    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
};

Ayay.prototype.map = function(callback) {
    if(!(arguments.length)) throw Error('input is empty');
    if(typeof callback !== 'function') throw Error(callback +' is not a function');
    if(!(this.length)) throw Error('ayay is empty');
    var result = new Ayay;
    for(var i = 0 ; i<this.length;i++){
        result[i] = callback(this[i],i,this);
    }

    return result;
   


};

Ayay.prototype.sort = function() {
   

    if(arguments.length) throw Error('input not required');
    if(!(this.length)) throw Error('ayay is empty');
    
    var temp;
    for(var i = 0; i<this.length;i++){
        this[i]=this[i].toString();
    }

    for(var j=0;j<this.length;j++){
        for(var i=0;i<this.length;i++){
            if(this[i] < this[i-1]){
                temp=this[i];
                this[i] = this[i-1];
                this[i-1] = temp;


            }
        }
    }
    
    return this;


};

Ayay.prototype.filter = function(callback) {
    
    if(!(arguments.length)) throw Error('input is empty');
    if(typeof callback !== 'function') throw Error(callback +' is not a function');
    if(!(this.length)) throw Error('ayay is empty');
    index= -1;
    var result = new Ayay;

    for(var i=0; i < this.length; i++){
        if(callback(this[i],i) ===true){
            result.push(this[i]);
        }
    }
    
        return result;



};

Ayay.prototype.find = function(callback) {
     
    if(!(arguments.length)) throw Error('input is empty');
    if(typeof callback !== 'function') throw Error(callback +' is not a function');
    if(!(this.length)) throw Error('ayay is empty');
    for(var i=0;i<this.length;i++){ 
    if(callback(this[i],i)){
        return this[i];
    } 
    };


    
};