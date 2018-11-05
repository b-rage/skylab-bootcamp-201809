class Postit {
    constructor(postit) {
        const { id, text } = postit

        this.id = id || Date.now()
        this.text = text
    }
}

module.exports = Postit