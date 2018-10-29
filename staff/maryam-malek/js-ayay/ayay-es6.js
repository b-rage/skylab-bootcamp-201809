class Ayay {
    constructor() {
        this.length = 0;
    }

    push() {
    
        for(var i = 0; i<arguments.length; i++){
            this[this.length] = arguments[i];
            this.length++;
        }
        return length;
    }

    pop(){
        if(!this.length) throw Error ('array can not be empty');

        var extra = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return extra;
    }

    forEach(callback){
        if(!this.length) throw Error ('array can not be empty');
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
        
        for (var i = 0; i < this.length; i++) callback(this[i], i, this);

    }

    map(callback){
        if(!this.length) throw Error ('array can not be empty')
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
        
        var newAy = new Ayay;
        for(var i = 0; i<this.length; i++){
            newAy.push(callback(this[i], i));
        }
        return newAy;
    }

    sort(){
        if(!this.length) throw Error ('array can not be empty');
        
        var index;
        for(var i = 0; i<this.length; i++){
            index = i;
            for(var x = i; x<this.length; x++){
                if(''+this[x] < ''+this[index]){
                    index = x;
                }
            }
            var moment = this[i];
            this[i]=this[index];
            this[index]=moment;
        }
        return this;
    }

    filter(callback){
        if(!this.length) throw Error ('array can not be empty');
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
        
        var newAy = new Ayay;
        for(var i = 0; i<this.length; i++){
           if(callback(this[i], i)){
            newAy.push(this[i]);
           }
            
        }
        return newAy;
    }

    find(callback){
        if(!this.length) throw Error ('array can not be empty');
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
        
        for(var i = 0; i<this.length; i++){
            if(callback(this[i], i)){
                return this[i];
            }
        }   
    }
}