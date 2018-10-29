//Bussines logic

// import {storage, User, Postit} from './data'

const data = require('./data')

const { Postit, User } = data

const logic = {
    createPostit(text, show, userId) {
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)
        if (typeof show !== 'boolean') throw new TypeError(`${show} is not a number`)
        if (typeof userId !== 'number') throw new TypeError(`${userId} is not a number`)

        if (!text.trim()) throw Error('text is empty or blank')

        const postit = new Postit(text, show, userId)

        const postits = this._listPostits()
        
        postits.push(postit)
        
        this._persistPostits(postits)
    },

    deletePostit(id) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        let postits = this._listPostits()
        
        postits = postits.filter(postit => postit.id !== id)
        
        this._persistPostits(postits)
    },

    _persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    _listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    listPostits(userId) {
        if (typeof userId !== 'number') throw new TypeError(`${userId} is not a number`)

        const postits = this._listPostits()

        return postits.filter(postit => postit.userId === userId) 
    },

    changePostit(textEdit, id, show) {
        if (typeof textEdit !== 'string') throw TypeError(`${textEdit} is not a string`)
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)
        if (typeof show !== 'boolean') throw new TypeError(`${show} is not a number`)

        if (!text.trim()) throw Error('text is empty or blank')

        let postits = this._listPostits()
        
        let index = postits.findIndex(postit => postit.id === id)
    
        postits[index].text = textEdit

        postits[index].show = show

        this._persistPostits(postits)
    },
   
    apearEdit(id, show) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)
        if (typeof show !== 'boolean') throw new TypeError(`${show} is not a number`)

        let postits = this._listPostits()
        
        let index = postits.findIndex(postit => postit.id === id)
    
        postits[index].show = show
        
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

        if (!name.trim().length) throw Error('name is empty or blank')
        if (!surname.trim().length) throw Error('surname is empty or blank')
        if (!username.trim().length) throw Error('username is empty or blank')
        if (!password.trim().length) throw Error('password is empty or blank')
        
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

        if (!username.trim().length) throw Error('username is empty or blank')
        if (!password.trim().length) throw Error('password is empty or blank')

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

                return res.status
            })
    }
}

// export default logic
module.exports = logic
