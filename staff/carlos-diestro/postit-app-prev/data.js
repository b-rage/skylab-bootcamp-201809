const storage = sessionStorage

if (!storage.getItem('postits')) storage.setItem('postits', JSON.stringify([]))

class PostIt {
  constructor(text) {
    this.id = Date.now()
    this.text = text
  }
}