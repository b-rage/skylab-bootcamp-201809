//Bussines logic

import {storage, User} from './data'

const logic = {
    createPostit(postit) {
        const postits = JSON.parse(storage.getItem('postits'))
        
        postits.push(postit)
        
        this.persistPostits(postits)
    },

    deletePostit(id) {

        let postits = JSON.parse(storage.getItem('postits'))
        
        postits = postits.filter(postit => postit.id !== id)
        
        this.persistPostits(postits)
    },

    persistPostits(postits) {
        return storage.setItem('postits', JSON.stringify(postits))
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    changePostit(textEdit, id, show) {
        let postits = JSON.parse(storage.getItem('postits'))
        
        let index = postits.findIndex(postit => postit.id === id)
    
        postits[index].text = textEdit

        postits[index].show = show

        this.persistPostits(postits)
    },
   
    apearEdit(id, show) {
        let postits = JSON.parse(storage.getItem('postits'))
        
        let index = postits.findIndex(postit => postit.id === id)
    
        postits[index].show = show
        
        this.persistPostits(postits)
    },
    
    listUsers() {
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users) {
        return storage.setItem('users', JSON.stringify(users))
    },

    registerUser(name, surname, username, password) {
        let users = this.listUsers()
        
        let user = new User (name, surname, username, password)

        users.push(user)

        this.persistUsers(users)
    },

    loginUser(username, password) {
        let users = this.listUsers()

        let index = users.findIndex(user => user.username === username)

        var message

        if (index === -1){
            message = 'username'
        } else{
            (users[index].password === password)?message = 'allright': message = 'password' 
        }

        return message
    }
}

export default logic
