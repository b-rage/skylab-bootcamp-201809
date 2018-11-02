const fs = require('fs')

class User {
    constructor(name, surname, username, password) {
        this.id = Date.now()
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.postits = []
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

    savePostit(id, text) {

        let json = fs.readFileSync(User._file)

        const users = JSON.parse(json)

        const index = users.findIndex(user => user.id === id)
        
        const postit = {id:Date.now(), text: text}

        users[index].postits.push(postit)

        json = JSON.stringify(users)
 
        fs.writeFileSync(User._file, json)

    }

    deletePostit(userId, id) {
        let json = fs.readFileSync(User._file)

        const users = JSON.parse(json)

        const index = users.findIndex(user => user.id === userId)

        const postits = users[index].postits.find(postit => postit.id !== id) //???

        users[index].postits.push(postits)

        json = JSON.stringify(users)
 
        fs.writeFileSync(User._file, json)
    }

    static findByUsername(username) {
        const json = fs.readFileSync(User._file)

        const users = JSON.parse(json)

        const user = users.find(user => user.username === username)

        // TODO is user an instance of User?

        return user
    }

    static findById(id) {
        const json = fs.readFileSync(User._file)

        const users = JSON.parse(json)

        const user = users.find(user => user.id === id)

        // TODO is user an instance of User?

        return user
    }
}

User._file = './data/users.json'

module.exports = User