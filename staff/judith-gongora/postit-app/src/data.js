// module.exports = { Postit }

class Post {
    constructor(userId, url, description) {
        this.id = Date.now()
        this.userId =userId
        this.url = url
        this.description = description
        this.comments = []
        this.likes = []
    }
}

class Comment {
    constructor(userId, content) {
        this.id = Date.now()
        this.userId =userId
        this.content= content
    }
}

class Like {
    constructor(userId) {
        this.id = Date.now()
        this.userId =userId
    }
}

export default { Post, Comment, Like }
