// Data - Model (domain)

const storage = sessionStorage


if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))

if (!storage.getItem('users'))
    storage.setItem('users', JSON.stringify([]))

class Postit {
    constructor(text,userId) {
        this.text = text
        this.id = Date.now()
        this.userId = userId
    }
}

class User {
    constructor(name, surname, username, password) {
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.id = Date.now()
    }
}

export default {
    storage,
    Postit,
    User
}
