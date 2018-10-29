import data from './data'
//const data = require('./data')
const {storage, Postit, User} = data

const logic = {
    createPostit(text, userID) {
        const postit = new Postit(text, userID)

        const postits = JSON.parse(storage.getItem('postits'))

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))
        this.persistPostits(postits)
    },

    _listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    listPostitsByUser(userID) {
        if (typeof userID !=='number') throw new TypeError (`${userID} is not a number`)

        const postits = this._listPostits()

        return postits.filter(postit => userID === postit.userID)

        
    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {
        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
      
    },

    updatePost(id, text, userID) {
        const newPostit = new Postit(text, userID)

        const postits = JSON.parse(storage.getItem('postits'))

        const index = postits.findIndex( el => el.id===id)

        postits[index] = newPostit

        this.persistPostits(postits)
        
    },

    completePost(id) {
        const postits = JSON.parse(storage.getItem('postits'))
        const index = postits.findIndex( el => el.id===id)

        postits[index].complete=true

        this.persistPostits(postits)
    },

    createUser(name, surname, username, password) {
        const user = new User(name, surname, username, password)

        const users = this.listUsers()

        users.push(user)

        this.persistUsers(users)
        
    },

    persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))

    },

    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    validateUser(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        const users = this.listUsers()

        const user = users.find(user => user.username === username && user.password === password)

        if (!user) throw Error ('wrong credentials')

        return user.id        
    },

}

export default logic
// module.exports = logic