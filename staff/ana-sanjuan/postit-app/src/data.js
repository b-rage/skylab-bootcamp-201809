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

export class User {
    constructor(name, surname, username, password) {
        this.name = name
        this.surname = surname
        this.username = username
        this.password =password
        this.id = Date.now()
    }
}
