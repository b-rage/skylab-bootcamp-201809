// Model (domain) - Data

const storage = sessionStorage

if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))

class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}