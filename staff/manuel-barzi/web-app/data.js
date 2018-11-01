class User {
    constructor(name, surname, username, password) {
        this.id = Date.now()
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
    }
}

module.exports = {
    User
}