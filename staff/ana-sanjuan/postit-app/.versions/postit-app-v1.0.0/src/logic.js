 import data from './data'
//const data = require('./data')

const {storage, Postit, User} = data

const logic = {
    
    createPostit(text, userId) {
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)
        if (typeof userId !== 'number') throw TypeError(`${userId} is not a number`)

        const postit = new Postit(text, userId)

        const postits = this._listPostits()

        postits.push(postit)

        this._persistPostits(postits)
    },

    _listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    listPostitsByUserId(userId) {
        if (typeof userId !== 'number') throw TypeError(`${userId} is not a number`)

        const postits = this._listPostits()

        return postits.filter(post => post.userId === userId)
    },

    _persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id){
        if (typeof id !== 'number') throw TypeError(`${id} is not a number`)

        let postits = this._listPostits()

        postits = postits.filter(postit => postit.id !== id)

        storage.setItem('postits', JSON.stringify(postits))
    },

    updatePostit(id, text) {
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)
        if (typeof id !== 'number') throw TypeError(`${id} is not a number`)

        let postits = this._listPostits()

        const postit = postits.find(postit => postit.id === id)

        postit.text = text

        this.persistPostits(postits)
    },

    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    _persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))
    },

    registerUser(name, surname, username, password) {
        if(typeof name !== 'string') throw TypeError (`${name} is not a string`)
        if(typeof surname !== 'string') throw TypeError (`${surname} is not a string`)
        if(typeof username !== 'string') throw TypeError (`${username} is not a string`)
        if(typeof password !== 'string') throw TypeError (`${password} is not a string`)
        
        if(!name.trim()) throw Error ('name is empty or blank')
        if(!surname.trim()) throw Error ('surname is empty or blank')
        if(!username.trim()) throw Error ('username is empty or blank')
        if(!password.trim()) throw Error ('password is empty or blank')
        
        const users = this.listUsers()

        let user = users.find(user => user.username === username)

        if(user) throw Error('username already exists')

        user = new User(name, surname, username, password)
       
        users.push(user)

        this._persistUsers(users)
    },

    authenticate(username, password){
        if(typeof username !== 'string') throw TypeError (`${username} is not a string`)
        if(typeof password !== 'string') throw TypeError (`${password} is not a string`)

        let users = this.listUsers()

        const user = users.find(user => user.username === username && user.password === password)
        
        if(!user) throw Error('wrong credentials')

        return user.id
    },

    deleteUserId() {
        storage.setItem('userId', '')
    }
}

export default logic
//module.exports = logic