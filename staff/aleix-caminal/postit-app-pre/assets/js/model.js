class Model {
    newEntity(values) {
        this.id = Date.now()
        const keys = Object.keys(values)
        keys.forEach(key => this[key] = values[key])
        return this
    }
}

class PostsTable extends Model {
    insert() {
        sessionStorage.setItem('posts', JSON.stringify([...this.all(), this]))
    }

    delete() {
        sessionStorage.setItem('posts', JSON.stringify(this.all().filter(post => post.id !== this.id)))
    }

    find(query) {
        let posts = this.all()
        const keys = Object.keys(query)
        keys.forEach(key => posts = posts.filter(post => post[key] === query[key]))
        return posts
    }

    get(id) {
        this.all().find(post => {
            if (post.id === id) {
                const keys = Object.keys(post)
                keys.forEach(key => this[key] = post[key])
                return
            }
        });
        return this
    }

    all() {
        return JSON.parse(sessionStorage.getItem('posts')) || []
    }
}

class BoardsTable extends Model {
    insert() {
        sessionStorage.setItem('boards', JSON.stringify([...this.all(), this]))
    }

    delete() {
        sessionStorage.setItem('boards', JSON.stringify(this.all().filter(board => board.id !== this.id)))
    }

    update(query) {
        let boards = this.all()
        const keys = Object.keys(query)
        boards.find(board => {
            if (board.id === this.id) {
                keys.forEach(key => board[key] = query[key])
                return
            }
        })
        sessionStorage.setItem('boards', JSON.stringify(boards))
    }

    get(id) {
        this.all().find(board => {
            if (board.id === id) {
                const keys = Object.keys(board)
                keys.forEach(key => this[key] = board[key])
                return
            }
        });
        return this
    }

    all() {
        return JSON.parse(sessionStorage.getItem('boards')) || []
    }
}
