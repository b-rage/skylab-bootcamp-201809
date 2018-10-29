class Ayay {
    constructor() {
        this.length = 0;
    }

    push() {
        Array.prototype.forEach.call(arguments, el => {
            this[this.length] = el
            this.length++
        })
        return this.length
    }

    pop() {
        let popped = this[this.length - 1]
        delete this[this.length - 1]
        if (this.length) this.length = this.length - 1
        return popped
    }

    forEach(callback) {
        if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

        for (let i = 0; i < this.length; i++) callback(this[i], i, this)
    }

    map(callback) {
        if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

        let newArr = new Ayay()

        for (let i = 0; i < this.length; i++) newArr.push(callback(this[i], i, this))

        return newArr

    }

    sort() {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length; j++) {
                if (this[j] > this[j + 1]) {
                    let temp = this[j]
                    this[j] = this[j + 1];
                    this[j + 1] = temp
                }
            }
        }
        return this
    }

    filter(callback) {
        if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

        let newArr = new Ayay()

        for (let i=0; i<this.length; i++) {
            if (callback(this[i])) newArr.push(this[i])
        }

        return newArr
    }

    find(callback) {
        if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

        for (let i=0; i<this.length; i++) {
            if (callback(this[i])) return this[i]
        }
    }

    join(element) {
        let outputString = this[0]

        if (element ===undefined) {
            for (let i=1; i<this.length; i++) 
                outputString += "," + this[i]
        }
        else {
            for (let i=1; i < this.length; i++) 
                outputString+=element + this[i]
        }

        if (!this.length) 
            return outputString = ""
        
        return outputString;
    }


}






