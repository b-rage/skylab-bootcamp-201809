const fs = require('fs')

class User {
    constructor(user) {
        const { id, name, surname, username, password } = user

        this.id = id || Date.now()

        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
    }

    save() {
        let json = fs.readFileSync(User._file)

        const users = JSON.parse(json)

        const index = users.findIndex(user => user.id === this.id)

        if (index < 0) users.push(this)
        else users[index] = this

        json = JSON.stringify(users)

        fs.writeFileSync(User._file, json)
    }

    toObject() {
        const { name, surname, username, password } = this

        return { name, surname, username, password }
    }

    static findByUsername(username) {
        const json = fs.readFileSync(User._file)

        const users = JSON.parse(json)

        const user = users.find(user => user.username === username)

        return user ? new User(user) : undefined
    }

    static findById(id) {
        const json = fs.readFileSync(User._file)

        const users = JSON.parse(json)

        const user = users.find(user => user.id === id)

        return user ? new User(user) : undefined
    }
}

User._file = './data/users.json'

module.exports = User