// import data from './data'
const data = require('./data')


const {storage, Postit, User} = data

const logic = {
    createPostit(text, userID) {
        if (typeof text !=='string') throw TypeError(`${text} is not a string`)

        if (!text.trim()) throw Error('text is empty or blank')

        if (typeof userID !=='number') throw new TypeError(`${userID} is not a number`)
        const postit = new Postit(text, userID)

        const postits = this._listPostits()

        postits.push(postit)

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
        if (typeof id !=='number') throw new TypeError(`${id} is not a number`)

        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
      
    },

    updatePost(id, text, userID) {
        if (typeof id!==`number`) throw new TypeError(`${id} is not a number`)

        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        if (typeof userID !== 'string') throw TypeError(`${text} is not a string`)

        const newPostit = new Postit(text, userID)

        const postits = JSON.parse(storage.getItem('postits'))

        const index = postits.findIndex( el => el.id===id)

        postits[index] = newPostit

        this.persistPostits(postits)
        
    },

    // completePost(id) {
    //     if (typeof id !=='number') throw new TypeError(`${id} is not a number`)

    //     const postits = JSON.parse(storage.getItem('postits'))

    //     const index = postits.findIndex( el => el.id===id)

    //     postits[index].complete=true

    //     this.persistPostits(postits)
    // },

    createUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then(res => {
                debugger
                
                if (res.error) throw Error(res.error)

                return res.data.id
            })
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

// export default logic
module.exports = logic