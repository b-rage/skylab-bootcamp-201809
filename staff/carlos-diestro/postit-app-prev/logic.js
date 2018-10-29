const logic = {
  createPostIt(text) {
    const postit = new PostIt(text)

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

  listPostIts() {
    return JSON.parse(storage.getItem('postits'))
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
  }
}