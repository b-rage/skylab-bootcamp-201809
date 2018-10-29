export const storage = sessionStorage
// const storage = localStorage


//Model (domain)

if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))


export class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}