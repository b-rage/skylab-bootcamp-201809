 class Postit{

    constructor(_text){

        this.text = _text
        this.id = Date.now()

    }
}

const storage = sessionStorage


if (!storage.getItem('users'))
    storage.setItem('users', JSON.stringify([]))


class User {
     
    constructor(name, surname, username, password, postits) {
        this.name = name
        this.surname = surname
        this.username = username
        this.password =password
        this.id = Date.now()
        this.postits = postits
    }
}

export default {
    
    Postit,
    storage,
    User
}

