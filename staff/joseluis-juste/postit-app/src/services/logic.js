import data from '../data/datalayer'

const {User, storage, Postit} = data

 const logic = {

    createPostit(id, text) {

        if (typeof id !== "number") throw TypeError (`${id} is not a number`)
        if (typeof text !== "string") throw TypeError (`${text} is not a string`)

       
        if (!text.trim()) throw TypeError (`${text} is empty`)

        const postit = new Postit(text)
        let users = this.listUsers()
        let user = users.find((user) => user.id === id)
        if (!user) throw Error("User not found");
        user.postits.push(postit)
        this.persistUsers(users)
        return user
    },

    listUsers() {
        const users = JSON.parse(storage.getItem('users'))
        if (!(users instanceof Array)) throw Error("The value got from storage is not an Array")
        return users
    },

    persistUsers(users) {

        if (!(users instanceof Array)) throw Error("The input is not an Array")

        storage.setItem('users', JSON.stringify(users))
    },

    deletePostit(userId, postitId) {
       
        if (typeof userId !== "number") throw TypeError (`${userId} is not a number`)
        if (typeof postitId !== "number") throw TypeError (`${postitId} is not a number`)

        let users = this.listUsers()
        let user = users.find((user) => user.id === userId)
        if (!user) throw Error("User not found");
        let filtered = user.postits.filter((postit) => postit.id !== postitId)
        user.postits.length = 0
        user.postits = filtered
        this.persistUsers(users)
        return user
    },

    updatePostit(userId, postitId, text) {

        if (typeof userId !== "number") throw TypeError (`${userId} is not a number`)
        if (typeof postitId !== "number") throw TypeError (`${postitId} is not a number`)
        if (typeof text !== "string") throw TypeError (`${text} is not a string`)

       
        if (!text.trim()) throw TypeError (`${text} is empty`)

        let users = this.listUsers()
        let user = users.find((user) => user.id === userId)
        if (!user) throw Error("User not found");
        let postit = user.postits.find((postit) => postit.id === postitId)
        if (!postit) throw Error("PostIt not found");
        postit.text = text;
        this.persistUsers(users)
        return user
    },

    registerUser(name, surname, username, password){

        if (typeof name !== "string") throw TypeError (`${name} is not a string`)
        if (typeof surname !== "string") throw TypeError (`${surname} is not a string`)
        if (typeof username !== "string") throw TypeError (`${username} is not a string`)
        if (typeof password !== "string") throw TypeError (`${password} is not a string`)

        if (!name.trim()) throw TypeError (`${name} is empty`)
        if (!surname.trim()) throw TypeError (`${surname} is empty`)
        if (!username.trim()) throw TypeError (`${username} is empty`)
        if (!password.trim()) throw TypeError (`${password} is empty`)
                
        
        let users = this.listUsers()
        let user = new User(name, surname, username, password,[])
        users.push(user)
        this.persistUsers(users)
        return user
    },

    loginUser(username, password){

        if (typeof username !== "string") throw TypeError (`${username} is not a string`)
        if (typeof password !== "string") throw TypeError (`${password} is not a string`)

        if (!username.trim()) throw TypeError (`${username} is empty`)
        if (!password.trim()) throw TypeError (`${password} is empty`)
        
        let users = this.listUsers()
        if (users && users.length > 0){

           return users.find((user) => user.username === username && user.password === password)
        }
        return false
    },


    getUserById(userId){

        return this.listUsers().find((user) => user === userId)
    },

    isLogged(){

        const userId = storage.getItem('userId')
        if (!userId) return false
        const users = this.listUsers()
        const user = users.find((user) => user.id === parseInt(userId))
        if (user)
            return user
        else 
            return false
    }

    
 }

export default logic
