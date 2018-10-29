class Postit {
    constructor(text, userID) {
        this.text = text
        this.userID = userID
        this.id = Date.now()
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

// export default {Postit, User}

module.exports = {Postit, User}
