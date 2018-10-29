import data from './data'

const { storage, Postit, User } = data

const logic = {
    createPostit(text, userId) {
        const postit = new Postit(text, userId)

        const postits = this._listPostits()

        postits.push(postit)

        this._persistPostits(postits)
    },

    _listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    _persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    listPostitsByUser(userId) {
        if (typeof userId !== 'number') throw new TypeError(`${userId} is not a number`)
        
        const postits = this._listPostits()

        return postits.filter(postit => postit.userId === userId)
        
    },

    deletePostit(id) {
        let postits = this._listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this._persistPostits(postits)
    },

    updatePostit(id, text) {
        let postits = this._listPostits()

        const postit = postits.find(postit => postit.id === id)

        postit.text = text

        this._persistPostits(postits)
    },

    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    _persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))
    },

    registerUser(name, surname, username, password) {
         if (typeof name !== 'string' || !name || !name.trim().length) throw TypeError (`${name} invalid name`)
         else if (typeof surname !== 'string' || !surname || !surname.trim().length) throw TypeError (`${surname} invalid surname`)
         else if (typeof username !== 'string' || !username || !username.trim().length) throw TypeError (`${username} invalid username`)
         else if (typeof password !== 'string' || !password || !password.trim().length) throw TypeError (`${password} invalid password`)
         else {

        const user = new User(name, surname, username, password)
        const users = this.listUsers()
        users.push(user)
        this._persistUsers(users)
        return true
        }
    },

    loginUser(username, password) {
        if (typeof username !== 'string' || !username || !username.trim().length) throw TypeError (`${username} invalid username`)
         else if (typeof password !== 'string' || !password || !password.trim().length) throw TypeError (`${password} invalid password`)
         else {

        const users = this.listUsers()
        const user = users.find(user => user.username === username && user.password === password)
        if (!user) throw Error ("wrong credentials")
        return user.id
        }
    }
}

export default logic