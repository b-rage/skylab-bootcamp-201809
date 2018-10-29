import data from './data'

const { storage, Postit, User } = data

const logic = {
    createPostit(text, userId) {
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        if (!text.trim()) throw Error('text is empty or blank')

        if (typeof userId !== 'number') throw new TypeError(`${userId} is not a number`)
       
        const postit = new Postit(text, userId)

        const postits = this._listPostits()

        postits.push(postit)

        this._persistPostits(postits)
    },

    _listPostits() {
       // return JSON.parse(storage.getItem('postits'))
    },

    _persistPostits(postits) {
       // storage.setItem('postits', JSON.stringify(postits))
    },

    listPostitsByUser(userId) {
        if (typeof userId !== 'number') throw new TypeError(`${userId} is not a number`)
        
        const postits = this._listPostits()

        return postits.filter(postit => postit.userId === userId)
        
    },

    deletePostit(id) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        let postits = this._listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this._persistPostits(postits)
    },

    updatePostit(id, text) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        if (!text.trim()) throw Error('text is empty or blank')

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
                if (res.error) throw Error(res.error)

                return res.data.id
            })
    },

    authenticate(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return res.data.id
            })
    }
}

export default logic