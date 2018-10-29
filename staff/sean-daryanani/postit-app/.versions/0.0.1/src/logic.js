import data from './data'
const {storage, Postit, User} = data

const logic = {
    createPostit(text, userID) {
        const postit = new Postit(text, userID)

        const postits = JSON.parse(storage.getItem('postits'))

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))
        this.persistPostits(postits)
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
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
        const user = {
            username: username,
            password: password
        }
        const users = this.listUsers()

        let filtered = users.filter(el => el.username === user.username)

        if (!filtered.length) return 'incorrect username'    

        if (filtered[0].password===user.password) {
            return ['correct password', filtered[0].id]
        } 

        else return 'incorrect password'  
        
    },

}

export default logic