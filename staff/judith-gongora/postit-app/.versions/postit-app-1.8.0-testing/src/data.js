// Data - Model (domain)

class Postit {
    constructor(text) {
        this.text = text
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


module.exports = {
    Postit,
    User
}

// export default {
//     storage,
//     Postit,
//     User
// }