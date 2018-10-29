import data from './data'

const { storage, Postit, User } = data

const logic = {
    createUser(name, surname, email, username, password) {
        const user = new User(name, surname, email, username, password)

        const users = this.listUsers()

        users.push(user)

        this.persistUsers(users)
    },
    loginUser(user, password) {
        const users = this.listUsers()
        const found = users.find(User => User.username === user)
        let usr = 'false'
        if (!found) {
            return usr
        }
        if(found.password === password){
            usr = found.id
            return usr
        }else {
            alert('incorrect') 
            return usr}
        
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

    UpdatePostit(id, index, text) {
        let postits = this.listPostits()

        postits.splice(index, 1, {text : text ,id : id});

        this.persistPostits(postits)
    }


}
export default logic