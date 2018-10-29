export const storage = sessionStorage

if (!storage.getItem('postits'))
storage.setItem('postits', JSON.stringify([]))

class Postit {
    constructor(text, userID) {
        this.text = text
        this.userID = userID
        this.id = Date.now()
    }
}


if (!storage.getItem('users'))
storage.setItem('users', JSON.stringify([]))

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