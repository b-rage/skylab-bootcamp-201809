import data from './data'

const { storage, Postit, User } = data

const logic = {
    createPostit(text) {
        const postit = new Postit(text)

        const postits = this.listPostits()

        postits.push(postit)

        this.persistPostits(postits)
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {
        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
    },

    updatePostit(id, text) {
        let postits = this.listPostits()

        const postit = postits.find(postit => postit.id === id)

        postit.text = text

        this.persistPostits(postits)
    },

    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))
    },

    registerUser(name, surname, username, password) {
        let user = new User(name, surname, username, password, [])
        //quitar los postits de aqui
        user.postits.push(new Postit("uno"))
        user.postits.push(new Postit("dos"))
        user.postits.push(new Postit("tres"))


        let users = this.listUsers()
        
        users.push(user)
        console.log(users)
        this.persistUsers(users)
    },

    loginUser(username, password) {
        
        const users = this.listUsers()

        console.log(users)

        const foundUser = users.find(user =>  user.username === username && user.password === password)
        
        return foundUser
    }
}

export default logic