// Data - Model (domain)

const storage = sessionStorage
// const storage = localStorage

if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))

if (!storage.getItem('users'))
    storage.setItem('users', JSON.stringify([]))

// function Postit(text) {
//     this.text = text
//     this.id = Date.now()
// }

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

export default {
    storage,
    Postit,
    User
}