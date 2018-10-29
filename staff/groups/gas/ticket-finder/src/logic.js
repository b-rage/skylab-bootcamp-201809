const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _events: [],
    _favouritesEventsArray: [],

    /**
     * Sends POST request with user info to register
     * @param {string} name 
     * @param {string} email 
     * @param {string} username 
     * @param {string} password 
     * @param {string} passwordRepeat 
     * @throws {Error in case of wrong input data}
     * @returns {Promise}
     */
    registerUser(name, email, username, password, passwordRepeat) {

        if (!name.trim()) throw Error('name is empty or blank')
        if (!email.trim()) throw Error('email is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
        if (!passwordRepeat.trim()) throw Error('password is empty or blank')
        
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
        if (email.match(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) throw Error(`${email} is an invalid email`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (typeof passwordRepeat !== 'string') throw TypeError(`${passwordRepeat} is not a string`)
        if (password !== passwordRepeat) throw TypeError(`passwords do not match`)



        const favouritesEventsArray = []

        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, email, username, password, favouritesEventsArray })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    /**
   * Sends POST request to authenticate user info
   * @param {string} username 
   * @param {string} password 
   * @throws {Error in case of wrong input data}
   * @returns {Promise}
   */
    login(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                const { id, token } = res.data

                this._userId = id
                this._token = token

                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })
    },

    get loggedIn() {
        return !!this._userId
    },
    /**
 * Sends removes user ID and token from session storage
 */
    logout() {
        this._events = []
        this._userId = null
        this._token = null

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
    },
    /**
* Sends GET request to retrieve current events in Spain to ticetkmaster API
* @returns {Promise}
*/
    showEvents() {
        return fetch('https://skylabcoders.herokuapp.com/proxy?url=https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&apikey=ELXA0H0YPzUTFYrjeH4AG5g6y4eWTVSO&size=200', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                this._events = res._embedded.events || []
                return this.randomEvents()
            })
    },
    /**
* Receives an array as input and randomises the order
*/
    randomEvents() {
        let randomArray = Array.from(this._events)
        randomArray.sort(() => .5 - Math.random())
        let randomArrayCarousel = randomArray.slice(0, 3)
        return randomArrayCarousel
    },
    /**
* Sends GET request to search for specific events
* @param {string} query 
* @throws {Error in case of wrong input data}
* @returns {Promise}
*/
    searchEvents(query) {
        if (query === undefined) throw Error(`${query} is not a valid query`)

        if (typeof query !== 'string') throw TypeError(`${query} is not a valid query`)

        if (!query.trim()) throw Error(`input text is blank`)

        return fetch(`https://skylabcoders.herokuapp.com/proxy?url=https://app.ticketmaster.com/discovery/v2/events.json?size=200&countryCode=ES&apikey=r0q6sz0wtLwGERyuLMtBsrS1lrlfAJGp&keyword=${query}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._events = res._embedded.events || []
            })
    },

    /**
     * Searches for a specific event based on ID
     * @param {string} id 
     * @throws {Error in case of wrong input data}
     */
    searchEventInfo(id) {
        if (typeof id !== 'string') throw Error(`${id} is not a valid id`)
        if (!id.trim()) throw Error('id is empty or blank')
        return fetch(`https://skylabcoders.herokuapp.com/proxy?url=https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=r0q6sz0wtLwGERyuLMtBsrS1lrlfAJGp`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                return res
            })
    },

    /**
  * Sends a PUT request to store the favourite events in user API
  * @param {string} id 
  * @throws {Error in case of wrong input data}
  */
    storeFavourites(favouriteId) {
        if (favouriteId === undefined) throw Error(`${favouriteId} is undefined`)
        if (favouriteId === '') throw Error(`${favouriteId} is empty`)
        if (!favouriteId.trim()) throw Error(`${favouriteId} is blank`)
        const self = this
        return this.searchEventInfo(favouriteId)
            .then(res => {
                self._favouritesEventsArray.push(res)
                return fetch(`https://skylabcoders.herokuapp.com/api/user/${self._userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': `Bearer ${self._token}`
                    },
                    body: JSON.stringify({
                        favouritesEventsArray: self._favouritesEventsArray
                    })
                })
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                return self._favouritesEventsArray
            })
            .catch(err => err)
    },


    /**
* Sends GET request to retrieve favourite events from API
* @returns {Promise}
*@throws {Error in case of wrong input data}
*/
    retrieveFavouriteEvents() {
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._favouritesEventsArray = res.data.favouritesEventsArray || []
            })
    },

    /**
     * Checks if an item is already in the user's favourites list
     * @param {string} id 
     */
    isFavourite(id) {
        if (typeof id !== 'string') throw Error(`${id} is not a string`)
        if (typeof id === 'number') throw Error(`${id} is not a string`)
        if (id instanceof Array) throw Error(` is not a string`)
        if (typeof id === 'boolean') throw Error(`${id} is not a string`)
        if (typeof id === 'object') throw Error(`[object Object] is not a string`)
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                this._favouritesEventsArray = res.data.favouritesEventsArray
                let result = false
                this._favouritesEventsArray.forEach(item => {

                    if (item.id === id) result = true


                })
                return result
            })

    },
    /**
     * Deletes a favourite event from the users data
     * @param {string} id 
     * @throws {Error in case of wrong input data}
     */
    deleteFavourite(id) {
        if (typeof id !== 'string') throw Error(`${id} is not a string`)
        if (typeof id === 'number') throw Error(`${id} is not a string`)
        if (id instanceof Array) throw Error(` is not a string`)
        if (typeof id === 'boolean') throw Error(`${id} is not a string`)
        if (typeof id === 'object') throw Error(`[object Object] is not a string`)
        var index = this._favouritesEventsArray.findIndex(item => item.id === id)
        this._favouritesEventsArray.splice(index, 1)
        const self = this
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${self._userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${self._token}`
            },
            body: JSON.stringify({ favouritesEventsArray: self._favouritesEventsArray })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                return self._favouritesEventsArray
            })

    }
}

export default logic
// module.exports = logic


