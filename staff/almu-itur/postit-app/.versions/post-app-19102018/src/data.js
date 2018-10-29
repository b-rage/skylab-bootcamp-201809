class Postit {
    constructor(text, userId) {
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

// export default { Postit, User }

module.exports = { Postit, User }