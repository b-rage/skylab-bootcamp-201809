// Data - Model (domain)

class Postit {
    constructor(text, user) {
        this.text = text
        this.id = Date.now()
        this.user = user
    }
} 

class User {
    constructor(name, surname, email, username, password){
    this.name = name
    this.surname = surname
    this.email = email
    this.username = username
    this.password = password
    this.id = Date.now()
    //this.postits = new Array
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