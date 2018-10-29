class Model {
    newEntity(values) {
        this.id = Date.now()
        for (var key in values) this[key] = values[key]
        return this
    }

    find(query) {
        let elements = this.all()
        const filter = elements => elements.filter(element => element[key] === query[key])
        for (var key in query) elements = filter(elements)
        return elements
    }

    first(elements) {
        for (var key in elements[0]) this[key] = elements[0][key]
        return this
    }

    get(id) {
        return this.first(this.find({id:id}))
    }
}

export class UsersTable extends Model {
    all() {
        return JSON.parse(sessionStorage.getItem('users')) || []
    }

    save() {
        let users = this.all()
        const index = users.findIndex(user => user.id === this.id)
        index < 0 ? users.push(this) : users[index] = this
        sessionStorage.setItem('users', JSON.stringify(users))
        return this
    }

    delete() {
        sessionStorage.setItem('users', JSON.stringify(this.all().filter(user => user.id !== this.id)))
    }
}

export class BoardsTable extends Model {
    all() {
        return JSON.parse(sessionStorage.getItem('boards')) || []
    }

    save() {
        let boards = this.all()
        const index = boards.findIndex(board => board.id === this.id)
        index < 0 ? boards.push(this) : boards[index] = this
        sessionStorage.setItem('boards', JSON.stringify(boards))
        return this
    }

    delete() {
        sessionStorage.setItem('boards', JSON.stringify(this.all().filter(board => board.id !== this.id)))
    }
}

export class PostsTable extends Model {
    all() {
        return JSON.parse(sessionStorage.getItem('posts')) || []
    }

    save() {
        let posts = this.all()
        const index = posts.findIndex(post => post.id === this.id)
        index < 0 ? posts.push(this) : posts[index] = this
        sessionStorage.setItem('posts', JSON.stringify(posts))
        return this
    }

    delete() {
        sessionStorage.setItem('posts', JSON.stringify(this.all().filter(post => post.id !== this.id)))
    }
}
