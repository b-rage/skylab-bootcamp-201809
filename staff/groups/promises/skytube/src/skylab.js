class Skylab {
    constructor() {
        this.root_id = 'https://skylabcoders.herokuapp.com/api/'
    }

    register(query) {
        return fetch(this.root_id + 'user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(query)
        }).then(result => {
            return result.json()
        }).then(json => {
            if (json.status === 'OK') return json.data
            throw Error(json.error)
        })
    }

    login(query) {
        return fetch(this.root_id + 'auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(query)
        }).then(result => {
            return result.json()
        }).then(json => {
            if (json.status === 'OK') return json.data
            throw Error(json.error)
        })
    }

    info(id, token) {
        return fetch(this.root_id + 'user/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + token
            }
        }).then(result => {
            return result.json()
        }).then(json => {
            if (json.status === 'OK') return json.data
            throw Error(json.error)
        })
    }

    update(query, id, token) {
        return fetch(this.root_id + 'user/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(query)
        }).then(result => {
            return result.json()
        }).then(json => {
            if (json.status === 'OK') return json.data
            throw Error(json.error)
        })
    }
}

export default Skylab

// module.exports = Skylab
