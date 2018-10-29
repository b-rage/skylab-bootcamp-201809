const storage = sessionStorage
// const storage = localStorage

if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))

if (!storage.getItem('users'))
    storage.setItem('users', JSON.stringify([]))

class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}

class User {
    constructor(name, surname, username, password, postits) {
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.postits = postits
        this.id = Date.now()
    }
}

export default {
    storage,
    Postit,
    User
}
