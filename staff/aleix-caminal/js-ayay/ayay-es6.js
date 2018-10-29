 class Ayay {

     /**
     * Create an ayay.
     * @param {any} args - The initial elements
     */
     constructor(...args) {
         this.length = 0;
         for (var i = 0; i < args.length; i++) {
             this.length++;
             this[i] = args[i];
         }
     }

    push(element) {
        this[this.length] = element;
        this.length++;
    };

    pop() {
        let result = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return result;
    };

    forEach(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function');

        for (var i = 0; i < this.length; i++) callback(this[i], i, this);
    };

    map(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function');

        let result = new Ayay();
        for (var i = 0; i < this.length; i++) {
            result[i] = callback(this[i], i, this);
            result.length++;
        }
        return result;
    };

    sort() {
        for (var i = 0; i < this.length - 1; i++) {
            let min = i;
            for (var j = i; j < this.length; j++) {
                if ('' + this[j] < '' + this[min]) {
                    min = j;
                }
            }

            let sorted = this[i];
            this[i] = this[min];
            this[min] = sorted;
        }
        return this;
    };

    filter(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');

        let result = [];
        for (var i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result[result.length] = this[i];
            }
        }
        return result ? result : -1;
    };

    find(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');

        for (var i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
        return -1;
    };
 }
