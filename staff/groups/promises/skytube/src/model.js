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
        const filter = elements => elements.filter(element => element[key] == query[key])
        for (var key in query) elements = filter(elements)
        return elements
    }

    first(elements) {
        for (var key in elements[0]) this[key] = elements[0][key]
        return this
    }

    get(id) {
        return this.first(this.find({id: id}))
    }
}

class Favourites extends Model {
    all() {
        return this._all('favourites')
    }

    save() {
        return this._save('favourites')
    }

    delete() {
        return this._delete('favourites')
    }
}

class WatchLater extends Model {
    all() {
        return this._all('watch_later')
    }

    save() {
        return this._save('watch_later')
    }

    delete() {
        return this._delete('watch_later')
    }
}

class Playlists extends Model {
    all() {
        return this._all('playlists')
    }

    save() {
        return this._save('playlists')
    }

    delete() {
        return this._delete('playlists')
    }
}

class History extends Model {
    all() {
        return this._all('history')
    }

    save() {
        return this._save('history')
    }

    delete() {
        return this._delete('history')
    }
}

export { Favourites, WatchLater, Playlists, History }

// module.exports = { Favourites, WatchLater, Playlists, History }
