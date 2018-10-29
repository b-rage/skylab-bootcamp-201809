//data

export const storage = sessionStorage

if (!storage.getItem('postits'))
storage.setItem('postits', JSON.stringify([]))

export class Postit {
    constructor(text, show) {
        this.text = text
        this.id = Date.now()
        this.show = show
    }
}

