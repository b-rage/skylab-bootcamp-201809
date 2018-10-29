//data

const storage = sessionStorage

if (!storage.getItem('postits'))
storage.setItem('postits', JSON.stringify([]))

class Postit {
    constructor(text, show) {
        this.text = text
        this.id = Date.now()
        this.show = show
    }
}
