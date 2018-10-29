import data from './data'

const { storage, PostIt, User } = data

const logic = {
  createPostIt(userId, text) {
    const postit = new PostIt(userId, text)

    const postits = this.listPostIts()

    postits.push(postit)

    this.persistPostIts(postits)
  },

  deletePostIt(id) {
    let postits = this.listPostIts()

    postits = postits.filter((item) => item.id !== id)

    this.persistPostIts(postits)
  },

  persistPostIts(postits) {
    storage.setItem('postits', JSON.stringify(postits))
  },

  listPostIts(userId) {
    let postits = JSON.parse(storage.getItem('postits'))

    if (userId) {
      postits = postits.filter((item) => item.userId === userId)
    }
    
    return postits
  },

  editPostIt(id, text) {
    let postits = this.listPostIts()
    let newPostits = []
    // const postit = postits.find(item => item.id === id)
    postits.forEach(item => {
      if(item.id === id) item.text = text

      newPostits.push(item)
    })

    this.persistPostIts(newPostits)
  },

  setUsers(users) {
    storage.setItem('users', JSON.stringify(users))
  },

  getUsers() {
    return JSON.parse(storage.getItem('users'))
  },

  signIn(name, email, password) {
    const user = new User(name, email, password)

    const users = this.getUsers()

    users.push(user)

    this.setUsers(users)
  },

  logIn(name, password) {
    const users = this.getUsers()
    
    let user

    // debugger

    users.forEach(userDb => {
      if (userDb.name === name && userDb.password === password) {
        user = userDb
      }
    })
  
    return user
  },

  setSession(id) {
    storage.setItem('session', JSON.stringify(id))
  },

  getSession() {
    return JSON.parse(storage.getItem('session'))
  }
}

export default logic