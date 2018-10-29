import data from './data'
// const data = require('./data')


const { Postit, User } = data

const logic = {

    _postits : [],

    createUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
        debugger
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

    validateUser(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')


        return fetch('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return res.data
            })
    },

    createPostit(text, userID, token) {
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        if (!text.trim()) throw Error('text is empty or blank')

        if (typeof userID !== 'string') throw new TypeError(`${userID} is not a string`)

        if (!userID.trim()) throw Error('userId is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')

        this._postits.push(new Postit(text))

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ postits: this._postits })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    listPostitsByUser(userID, token) {
        if (typeof userID !== 'string') throw new TypeError(`${userID} is not a string`)

        if (!userID.trim()) throw Error('userID is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userID}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._postits = res.data.postits || []
            })
        },


    deletePostit(id, userID, token) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        if (typeof userID !== 'string') throw new TypeError(`${userID} is not a string`)

        if (!userID.trim()) throw Error('userID is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')

        this._postits = this._postits.filter(postit => postit.id !==id)

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ postits: this._postits })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
      
    },

    updatePost(id, text, userID, token) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        // if (!text.trim()) throw Error('text is empty or blank')

        if (typeof userID !== 'string') throw new TypeError(`${userID} is not a string`)

        if (!userID.trim()) throw Error('userID is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')

        const postit = this._postits.filter(postit => postit.id === id)

        postit.text = text

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ postits: this._postits })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
        
    },

}

export default logic
// module.exports = logic