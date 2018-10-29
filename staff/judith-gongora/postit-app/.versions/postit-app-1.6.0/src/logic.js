import data from './data'

const { storage, Postit, User } = data

const logic = {
    createUser(name, surname, email, username, password) {

        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!email.trim()) throw Error('email is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        const user = new User(name, surname, email, username, password)

        const users = this.listUsers()

        users.push(user)

        this.persistUsers(users)
    },
    loginUser(username, password) {
       
        const users = this.listUsers()

        const user = users.find(user => user.username === username && user.password === password)

        if (!user) throw Error('wrong credentials')

        return user.id
        
    },
    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))
    },

    //POSTITS
    createPostit(text, user) {
        const postit = new Postit(text, user)
 
        const postits = this.listPostits()

        postits.push(postit)

        this.persistPostits(postits)
    },
    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    listPostitsByUser(user) {
        if (typeof user !== 'number') throw new TypeError(`${user} is not a number`)

        const postits = this.listPostits()
       
        return postits.filter(postit => postit.user === user)
    },

    persistPostits(postits) {
 
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {
  
        let postits = this.listPostits()
        
        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
    },

    editPost(id) {
        document.getElementById(id).disabled = false;
    },

    UpdatePostit(id, index, text, user) {
        let postits = this.listPostits()

        postits.splice(index, 1, {text : text ,id : id, user: user});

        this.persistPostits(postits)
    }


}
export default logic