const storage = sessionStorage

if (!storage.getItem('users')) storage.setItem('users', JSON.stringify([]))
if (!storage.getItem('postits')) storage.setItem('postits', JSON.stringify([]))
if (!storage.getItem('session')) storage.setItem('session', JSON.stringify())

class PostIt {
  constructor(userId, text) {
    this.id = Date.now()
    this.userId = userId
    this.text = text
  }
}

class User {
  constructor(name, email, password) {
    this.id = Date.now()
    this.name = name
    this.email = email
    this.password = password
  }
}

export default {
  storage,
  PostIt,
  User
}