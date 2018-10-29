import data from './data'

const { Postit} = data

const logic = {
    _postits : [],

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
 
        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ name, surname, email, username, password })
        })
            .then(res => res.json())
            .then(res => {
                
                if (res.error) throw Error(res.error)

                return res.data.id
            })
            .catch(({message}) => console.log('error', message))
    },
    loginUser(username, password) {
       
        if (!username) throw Error('wrong credentials')

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

                return res.data
            })
        
    },

    //POSTITS
    createPostit(text, userId, token) {
        
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        if (!text.trim()) throw Error('text is empty or blank')

        if (typeof userId !== 'string') throw new TypeError(`${userId} is not a string`)

        if (!userId.trim()) throw Error('userId is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')

        this._postits.push(new Postit(text))

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userId}`, {
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

    listPostits(userId, token) {
        if (typeof userId !== 'string') throw new TypeError(`${userId} is not a string`)

        if (!userId.trim()) throw Error('userId is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userId}`, {
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

    deletePostit(id, userId, token) {
  
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        if (typeof userId !== 'string') throw new TypeError(`${userId} is not a string`)

        if (!userId.trim()) throw Error('userId is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')

        this._postits = this._postits.filter(postit => postit.id !== id)

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userId}`, {
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

    editPost(id) {
        document.getElementById(id).disabled = false;
    },

    UpdatePostit(userId, token, id, index, text) {

        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        if (!text.trim()) throw Error('text is empty or blank')

        if (typeof userId !== 'string') throw new TypeError(`${userId} is not a string`)

        if (!userId.trim()) throw Error('userId is empty or blank')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)

        if (!token.trim()) throw Error('token is empty or blank')

        this._postits.splice(index, 1, {text : text ,id : id})

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${userId}`, {
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
    }


}
export default logic