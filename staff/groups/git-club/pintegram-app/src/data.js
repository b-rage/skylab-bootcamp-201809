//Data

class Post {
    constructor(userId, url, description) {
        this.id = Date.now()
        this.userId =userId
        this.url = url
        this.description = description
        this.publicPost = true
    }
}

class Comment {
    constructor(postId, content) {
        this.id = Date.now()
        this.postId =postId
        this.content= content
    }
}

// module.exports = { Post, Comment }
 
export default { Post, Comment}
