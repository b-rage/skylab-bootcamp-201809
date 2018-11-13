const uid = require('uuid/v4')

class Postit {
    constructor({ id, text, status }) {
        this.id = id || uid()
        this.text = text
        this.status = status
    }
}

module.exports = Postit