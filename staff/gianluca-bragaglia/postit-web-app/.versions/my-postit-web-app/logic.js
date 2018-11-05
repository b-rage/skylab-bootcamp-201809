const { User } = require('./data')

const logic = {
    registerUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return User.findByUsername(username)
            .then(user => {
                if (user) throw Error(`username ${username} already registered`)

                user = new User({ name, surname, username, password })

                return user.save()
            })
    },

    authenticateUser(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return User.findByUsername(username)
            .then(user => {
                if (!user || user.password !== password) throw Error('invalid username or password')

                return user.id
            })
    },

    retrieveUser(id) {
        if (typeof id !== 'number') throw TypeError(`${id} is not a number`)

        return User.findById(id)
            .then(user => {
                if (!user) throw Error(`user with id ${id} not found`)

                const _user = user.toObject()

                _user.id = id

                delete _user.password

                return _user
            })
    },

    savePostit(userId, body) {
        if (typeof userId !== 'number') throw TypeError(`${userId} is not a number`)
        if (typeof body !== 'string') throw TypeError(`${body} is not a string`)
        if (!body.trim()) throw Error('postit body is empty or blank')

        const postit = {id: Date.now(), body: body}
        return User.findById(userId)
            .then(user => {
               
                user.postits.push(postit)
        
                return user.save()
            })
    },

    updatePostit(userId, postitId, body){
        if (typeof userId !== 'number') throw TypeError(`${userId} is not a number`)
        if (typeof postitId !== 'number') throw TypeError(`${postitId} is not a number`)
        if (typeof body !== 'string') throw TypeError(`${body} is not a string`)
        if (!body.trim()) throw Error('postit body is empty or blank')

        return User.findById(userId)
        .then(user => {
            const index = user.postits.findIndex(postit => postit.id === postitId)
            
            user.postits[index].body = body
        
            return user.save()
        })

    },

    deletePostit(userId, postitId) {
        if (typeof userId !== 'number') throw TypeError(`${userId} is not a number`)
        if (typeof postitId !== 'number') throw TypeError(`${postitId} is not a number`)
        return User.findById(userId)
            .then(user => {
                const index = user.postits.findIndex(postit => postit.id === postitId)
                let pos1 = user.postits.slice(0, index)
                let pos2 = user.postits.slice(index + 1)
        
                let _postits = pos1.concat(pos2)
        
                user.postits = _postits
        
                return user.save()
            })

    }
}

module.exports = logic