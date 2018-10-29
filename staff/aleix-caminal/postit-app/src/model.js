class Model {
    _all(table) {
        return JSON.parse(sessionStorage.getItem(table)) || []
    }

    _save(table) {
        let elements = this.all()
        const index = elements.findIndex(element => element.id === this.id)
        index < 0 ? elements.push(this) : elements[index] = this
        sessionStorage.setItem(table, JSON.stringify(elements))
        return this
    }

    _delete(table) {
        sessionStorage.setItem(table, JSON.stringify(this.all().filter(element => element.id !== this.id)))
    }

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

class UsersTable extends Model {
    all() {
        return this._all('users')
    }

    save() {
        return this._save('users')
    }

    delete() {
        return this._delete('users')
    }
}

class BoardsTable extends Model {
    all() {
        return this._all('boards')
    }

    save() {
        return this._save('boards')
    }

    delete() {
        return this._delete('boards')
    }
}

class PostsTable extends Model {
    all() {
        return this._all('posts')
    }

    save() {
        return this._save('posts')
    }

    delete() {
        return this._delete('posts')
    }
}

export { UsersTable, BoardsTable, PostsTable }

// module.exports = { UsersTable, BoardsTable, PostsTable }
