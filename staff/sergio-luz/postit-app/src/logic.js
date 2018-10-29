import { storage, Postit, User } from './data'

const logic = {
    createPostit(text, id) {
        if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

        if (!text.trim()) throw Error('text is empty or blank')

        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        const postit = new Postit(text, id)

        const postits = this.listPostits()

        postits.push(postit)

        this.persistPostits(postits)
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    listPostitsbyId(ID) {
        if (typeof ID !== 'number') throw new TypeError(`${ID} is not a number`)

        const list=JSON.parse(storage.getItem('postits'))
        const temp= list.filter((item)=> item.userId===ID)
        return temp
    },

    persistPostits(postits) {
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        let postits = this.listPostits()

        postits = postits.filter(postit => postit.id !== id)

        this.persistPostits(postits)
    },

    modifyPostit(id) {
        if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

        let pos = document.getElementById(id)

        const postits = this.listPostits()
        const temp=postits.map(posts => {
            if (posts.id === id) {
                posts.text = pos.children[0].textContent
            }
            return posts
        })

        this.persistPostits(temp)
    },









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

    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users) {
        storage.setItem('users', JSON.stringify(users))
    },

    checkLogin(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        const users = this.listUsers()

        const user = users.find(user => user.username === username && user.password === password)
        
        if (!user) throw Error('wrong credentials')

        return user.id
    }



}




export default logic