//import logic from './logic'

require('isomorphic-fetch')

global.sessionStorage = require('sessionstorage')

const logic = require('./logic')

const { expect } = require('chai')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logic', () => {
    describe('users', () => {
        describe('register', () => {
            it('should succeed on correct data', () =>
                logic.signIn(`jd-${Math.random()}`, 'john@john.com', 'John', 'Doe', '123')
                    .then(() => expect(true).to.be.true)
            )

            it('should fail on register same user twice', () => {
                const username = `jd-${Math.random()}`

                return logic.signIn(username, 'john@john.com', 'John', 'Doe', '123')
                    .then(() => logic.signIn(username, 'john@john.com', 'John', 'Doe', '123'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', undefined, 'Doe', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on no username', () => {
                expect(() =>
                    logic.signIn('', 'john@john.com', 'John', 'Doe', '123')
                ).to.throw(Error, 'username is empty or blank')
            })

            it('should fail on no email', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, '', 'John', 'Doe', '123')
                ).to.throw(Error, 'email is empty or blank')
            })

            it('should fail on no name', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', '', 'Doe', '123')
                ).to.throw(Error, 'name is empty or blank')
            })

            it('should fail on no surname', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', 'John', '', '123')
                ).to.throw(Error, 'surname is empty or blank')
            })

            it('should fail on no password', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', 'John', 'Doe', '')
                ).to.throw(Error, 'password is empty or blank')
            })
        })

        describe('log in', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', surname = 'Doe', email = 'john@john'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logic.signIn(username, email, name, surname, password)
                })

                it('should succeed on correct data', () =>
                    logic.logIn(username, password)
                        .then(() => expect(true).to.be.true)
                )

                it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logic.logIn(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logic.logIn(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })

                it('should fail on no username', () => {
                    expect(() =>
                        logic.logIn('', '123')
                    ).to.throw(Error, 'username is empty or blank')
                })

                it('should fail on no password', () => {
                    expect(() =>
                        logic.logIn('john', '')
                    ).to.throw(Error, 'password is empty or blank')
                })
            })

            it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logic.logIn(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logic.logIn(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logic.logIn(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            // TODO other cases
        })
        describe('user movies', () => {
            beforeEach(() => {
                return logic.logIn('test2', '1234')
                    .then(() => logic.retrieveUserData())
            })

            after(() => {
                logic.updateUserSeen([])
                logic.updateUserPending([])
            })

            describe('update user seen movies list', () => {
                it('should update the list of user seen movies', () => {
                    const movie = [{id: '001', name: 'the great movie'}]
                    
                    logic.updateUserSeen(movie)
                        .then(() => {
                            expect(true).to.be.true
                            debugger
                            expect(logic._user.seen.length).to.be.equal(1)
                        })
                })

                it('should fail if no array is passed', () => {
                    const movie = {id: '001', name: 'the great movie'}

                    expect(() =>
                        logic.updateUserSeen(movie)
                    ).to.throw(Error, `${movie} is not an array`)
                })
            })

            describe('update user pending movies list', () => {
                it('should update the list of user seen movies', () => {
                    const movie = [{id: '100', name: 'awesome movie'}]

                    logic.updateUserPending(movie)
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.pending.length).to.equal(1)
                        })
                })

                it('should fail if no array is passed', () => {
                    const movie = {id: '100', name: 'awesome movie'}

                    expect(() =>
                        logic.updateUserPending(movie)
                    ).to.throw(Error, `${movie} is not an array`)
                })
            })

            describe('retrieve user seen list movies', () => {
                it('should return the list of user movies', () => {
                    logic.retrieveUserData()
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.seen.length).to.equal(1)
                            expect(logic._user.pending.length).to.equal(1)
                        })
                })
            })

            describe('delete user seen movies', () => {
                it('should delete the list of user seen movies', () => {
                    logic.deleteUserSeen('001')
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.seen.length).to.equal(0)
                        })
                })
            })

            describe('delete user pending movies', () => {
                it('should delete the list of user pending movies', () => {
                    logic.deleteUserPending('100')
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.pending.length).to.equal(0)
                        })
                })
            })
        })
    })

    describe('movies', () => {
        describe('not user intervention', () => {
            describe('movies areas', () => {
                it('should return trending movies', () => {
                    logic.retrieveTrending()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.results.length).to.be.above(0)
                        })
                })
            })

            describe('in theatre', () => {
                it('should return in theatre movies', () => {
                    logic.retrieveInTheatre()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.results.length).to.be.above(0)
                        })
                })
            })

            describe('populars', () => {
                it('should return popular movies', () => {
                    logic.retrievePopular()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.results.length).to.be.above(0)
                        })
                })
            })
        })

        describe('user intervention', () => {
            describe('search movies', () => {
                let query = 'harry+potter'
                let page = 3

                it('should return movies with required page', () => {
                    logic.retrieveMovies(query, page)
                        .then(movies => {
                            expect(movies.page).to.equal(3)
                        })
                })

                it('should get page 1 if no page passed', () => {
                    page = undefined

                    logic.retrieveMovies(query, page).then(movies => {
                        expect(movies.page).to.equal(1)
                    })
                })

                it('should fail on undefined query', () => {
                    query = undefined
                    expect(() =>
                        logic.retrieveMovies(query)
                    ).to.throw(Error, `${query} is not a valid query`)
                })
            })

            describe('retrieve movie', () => {
                it('should return the movie extended information', () => {
                    let movieId = '293660'

                    logic.retrieveMovie(movieId)
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                        })
                })

                it('should fail on undefined movie id', () => {
                    movieId = undefined
                    expect(() =>
                        logic.retrieveMovie(movieId)
                    ).to.throw(Error, `${movieId} is not a valid movie id`)
                })

                it('should fail on blank movie id', () => {
                    expect(() =>
                        logic.retrieveMovie('')
                    ).to.throw(TypeError, ` is blank id`)
                })
            })
        })

        describe('movies state', () => {
            describe('check movie in lists', () => {

                let movieId = '293660'
                let list = 'seen'

                describe('with user logged in', () => {
                    let movie, username, password
                    beforeEach(() => {
                        const name = 'John', surname = 'Doe', email = 'john@john'
                        username = `jd-${Math.random()}`, password = '123'
                        movie = { id: '293660', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }

                        return logic.signIn(username, email, name, surname, password)
                            .then(() => {
                                return logic.logIn(username, password)
                                    .then(() => logic.retrieveUserData())
                            })
                    })
                    it('should succeed on returning if the movie is inside seen list', () => {

                        return logic.addUserSeen(movie)
                            .then(() => {
                                let index = logic.checkInList(movieId, list)
                                expect(index).to.be.a('number')

                                expect(index).to.equal(0)
                            })
                    })
                    it('should succeed on returning -1 if the movie is not inside the list', () => {
                        let index = logic.checkInList(movieId, list)

                        expect(index).to.equal(-1)
                    })


                })
                describe('without user logged in', () => {

                    it('should succeed on returning -1 if the user is not loged in ', () => {
                        let index = logic.checkInList(movieId, list)
                        expect(index).to.equal(-1)
                    })
                    it('should fail with undefined movie id', () => {
                        movieId = undefined
                        expect(() =>
                            logic.checkInList(movieId, list)
                        ).to.throw(Error, `${movieId} is not a string or a number`)
                    })
                    it('should fail with null movie id', () => {
                        movieId = null
                        expect(() =>
                            logic.checkInList(movieId, list)
                        ).to.throw(Error, `${movieId} is not a string or a number`)
                    })
                    it('should fail with not a string movie id (boolean)', () => {
                        movieId = true
                        expect(() =>
                            logic.checkInList(movieId, list)
                        ).to.throw(Error, `${movieId} is not a string or a number`)
                    })
                    it('should fail with not a string movie id (object)', () => {
                        movieId = {}
                        expect(() =>
                            logic.checkInList(movieId, list)
                        ).to.throw(Error, `${movieId} is not a string or a number`)
                    })
                    it('should fail with not a string movie id (array)', () => {
                        movieId = []
                        expect(() =>
                            logic.checkInList(movieId, list)
                        ).to.throw(Error, `${movieId} is not a string or a number`)
                    })
                })
            })
            describe('check movie state(favourite, like, unlike)', () => {
                let movieId, state
                beforeEach(() => {
                    movieId = '293660'
                    state = 'favourite'
                })
                describe('with user logged in', () => {
                    let movie, username, password
                    beforeEach(() => {
                        const name = 'John', surname = 'Doe', email = 'john@john'
                        username = `jd-${Math.random()}`, password = '123'
                        movie = { id: '293660', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }

                        return logic.signIn(username, email, name, surname, password)
                            .then(() => {
                                movie.favourite = true
                                return logic.logIn(username, password)
                                    .then(() => logic.retrieveUserData()
                                        .then(() => logic.addUserSeen(movie))
                                    )
                            })
                    })
                    it('should succeed on returning if the movie is checked as favourite', () => {
                        state = 'favourite'

                        let check = logic.checkState(movieId, state)
                        expect(check).to.be.a('boolean')

                        expect(check).to.be.true
                    })
                    it('should succeed on returning false if the movie is not checked as like', () => {
                        state = 'like'
                        let check = logic.checkState(movieId, state)

                        expect(check).to.be.false
                    })
                    afterEach(() => {
                        logic.logout()
                    })


                })
                describe('without user logged in', () => {
                    it('should succeed on returning false if the user is not loged in ', () => {
                        let check = logic.checkState(movieId, state)
                        expect(check).to.be.false
                    })
                    it('should fail with undefined movie id', () => {
                        movieId = undefined
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${movieId} is not a string`)
                    })
                    it('should fail with null movie id', () => {
                        movieId = null
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${movieId} is not a string`)
                    })
                    it('should fail with not a string movie id (number)', () => {
                        movieId = 1234
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${movieId} is not a string`)
                    })
                    it('should fail with not a string movie id (boolean)', () => {
                        movieId = true
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${movieId} is not a string`)
                    })
                    it('should fail with not a string movie id (object)', () => {
                        movieId = {}
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${movieId} is not a string`)
                    })
                    it('should fail with not a string movie id (array)', () => {
                        movieId = []
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${movieId} is not a string`)
                    })
                    it('should fail with undefined movie state', () => {
                        state = undefined
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${state} is not a string`)
                    })
                    it('should fail with null movie state', () => {
                        state = null
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${state} is not a string`)
                    })
                    it('should fail with not a string movie state (number)', () => {
                        state = 1234
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${state} is not a string`)
                    })
                    it('should fail with not a string movie state (boolean)', () => {
                        state = true
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${state} is not a string`)
                    })
                    it('should fail with not a string movie state (object)', () => {
                        state = {}
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${state} is not a string`)
                    })
                    it('should fail with not a string movie state (array)', () => {
                        state = []
                        expect(() =>
                            logic.checkState(movieId, state)
                        ).to.throw(Error, `${state} is not a string`)
                    })
                })
            })

            describe('check seen click', () => {
                let movie = { id: '123', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }

                describe('with user logged in', () => {
                    let movie1, username, password
                    beforeEach(() => {
                        const name = 'John', surname = 'Doe', email = 'john@john'
                        username = `jd-${Math.random()}`, password = '123'
                        movie1 = { id: '293660', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }

                        return logic.signIn(username, email, name, surname, password)
                            .then(() => {
                                return logic.logIn(username, password)
                                    .then(() => logic.retrieveUserData()
                                        .then(() => logic.addUserSeen(movie1))
                                    )
                            })
                    })
                    it('should succeed on adding the movie in seen list if it was not', () => {
                        let check = logic.seenClick(movie)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('10')

                        expect(logic._user.seen.length).to.equal(2)

                    })
                    it('should succeed on deleting the movie from seen list if it was', () => {

                        let check = logic.seenClick(movie1)

                        expect(check).to.equal('00')

                        expect(logic._user.seen.length).to.equal(0)

                    })
                    it('should succeed on adding the movie in seen list if it was not and deleting it from pending if it was', () => {

                        return logic.addUserPending(movie)
                            .then(() => {

                                let check = logic.seenClick(movie)

                                expect(check).to.equal('10')

                                expect(logic._user.seen.length).to.equal(2)
                                expect(logic._user.pending.length).to.equal(0)

                            })

                    })

                    afterEach(() => {
                        logic.logout()
                    })


                })
                describe('without user logged in', () => {
                    it('should succeed on returning an error if the user is not loged in ', () => {
                        let check = logic.seenClick(movie)
                        expect(check).to.equal('You should log in before to use that feature')
                    })
                    it('should fail with undefined movie', () => {
                        movie = undefined
                        expect(() =>
                            logic.seenClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with null movie', () => {
                        movie = null
                        expect(() =>
                            logic.seenClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not an object movie (number)', () => {
                        movie = 1234
                        expect(() =>
                            logic.seenClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not a object movie (boolean)', () => {
                        movie = true
                        expect(() =>
                            logic.seenClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not a object movie (string)', () => {
                        movie = ''
                        expect(() =>
                            logic.seenClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not a object movie (array)', () => {
                        movie = []
                        expect(() =>
                            logic.seenClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                })
            })

            describe('check pending click', () => {
                let movie = { id: '123', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }

                describe('with user logged in', () => {
                    let movie1, username, password
                    beforeEach(() => {
                        const name = 'John', surname = 'Doe', email = 'john@john'
                        username = `jd-${Math.random()}`, password = '123'
                        movie1 = { id: '293660', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }

                        return logic.signIn(username, email, name, surname, password)
                            .then(() => {
                                return logic.logIn(username, password)
                                    .then(() => logic.retrieveUserData()
                                        .then(() => logic.addUserPending(movie1))
                                    )
                            })
                    })
                    it('should succeed on adding the movie in pending list if it was not', () => {
                        let check = logic.pendingClick(movie)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('01')

                        expect(logic._user.pending.length).to.equal(2)

                    })
                    it('should succeed on deleting the movie from seen list if it was', () => {

                        let check = logic.pendingClick(movie1)

                        expect(check).to.equal('00')

                        expect(logic._user.pending.length).to.equal(0)

                    })
                    it('should succeed on adding the movie in seen list if it was not and deleting it from pending if it was', () => {

                        return logic.addUserSeen(movie)
                            .then(() => {

                                let check = logic.pendingClick(movie)

                                expect(check).to.equal('01')

                                expect(logic._user.pending.length).to.equal(2)
                                expect(logic._user.seen.length).to.equal(0)

                            })

                    })

                    afterEach(() => {
                        logic.logout()
                    })


                })
                describe('without user logged in', () => {
                    it('should succeed on returning an error if the user is not loged in ', () => {
                        let check = logic.pendingClick(movie)
                        expect(check).to.equal('You should log in before to use that feature')
                    })
                    it('should fail with undefined movie', () => {
                        movie = undefined
                        expect(() =>
                            logic.pendingClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with null movie', () => {
                        movie = null
                        expect(() =>
                            logic.pendingClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not an object movie (number)', () => {
                        movie = 1234
                        expect(() =>
                            logic.pendingClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not a object movie (boolean)', () => {
                        movie = true
                        expect(() =>
                            logic.pendingClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not a object movie (string)', () => {
                        movie = ''
                        expect(() =>
                            logic.pendingClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                    it('should fail with not a object movie (array)', () => {
                        movie = []
                        expect(() =>
                            logic.pendingClick(movie)
                        ).to.throw(Error, `${movie} is not an object`)
                    })
                })
            })

            describe('check favourite click', () => {
                let id = '123'
                let id1 = '293660'
                describe('with user logged in', () => {
                    let username, password
                    let movie = { id: '123', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }
                    let movie1 = { id: '293660', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: true }
                    beforeEach(() => {
                        const name = 'John', surname = 'Doe', email = 'john@john'
                        username = `jd-${Math.random()}`, password = '123'

                        return logic.signIn(username, email, name, surname, password)
                            .then(() => {
                                return logic.logIn(username, password)
                                    .then(() => logic.retrieveUserData()
                                        .then(() => logic.addUserSeen(movie)
                                            .then(() => logic.addUserSeen(movie1))
                                        )
                                    )
                            })
                    })
                    it('should succeed on adding the state favourite to the movie, if it was in seen list', () => {
                        let check = logic.favouriteClick(id)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('1')

                        expect(logic._user.seen[0].favourite).to.be.true

                    })
                    it('should succeed on deleting the state favourite to the movie, if it was in seen list and already had favourite state', () => {

                        let check = logic.favouriteClick(id1)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('0')

                        expect(logic._user.seen[1].favourite).to.be.false

                    })
                    it('should succeed on sending a warning if the movie was not in seen list', () => {

                        let check = logic.favouriteClick('111')

                        expect(check).to.be.a('string')

                        expect(check).to.equal('You should have seen the movie first')

                    })



                    afterEach(() => {
                        logic.logout()
                    })


                })
                describe('without user logged in', () => {
                    it('should succeed on returning an error if the user is not loged in ', () => {
                        let check = logic.favouriteClick(id)
                        expect(check).to.be.a('string')

                        expect(check).to.equal('You should log in before to use that feature')
                    })
                    it('should fail with undefined id', () => {
                        id = undefined
                        expect(() =>
                            logic.favouriteClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with null id', () => {
                        id = null
                        expect(() =>
                            logic.favouriteClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a string id (number)', () => {
                        id = 1234
                        expect(() =>
                            logic.favouriteClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (boolean)', () => {
                        id = true
                        expect(() =>
                            logic.favouriteClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (object)', () => {
                        id = {}
                        expect(() =>
                            logic.favouriteClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (array)', () => {
                        id = []
                        expect(() =>
                            logic.favouriteClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                })
            })

            describe('check like click', () => {
                let id = '123'
                let id1 = '293660'
                let id3 = '333'
                describe('with user logged in', () => {
                    let username, password
                    let movie = { id: '123', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }
                    let movie1 = { id: '293660', name: 'the great film', poster_path: 'http://...', like: true, unlike: false, favourite: false }
                    let movie3 = { id: '333', name: 'the great film', poster_path: 'http://...', like: false, unlike: true, favourite: false }

                    beforeEach(() => {
                        const name = 'John', surname = 'Doe', email = 'john@john'
                        username = `jd-${Math.random()}`, password = '123'

                        return logic.signIn(username, email, name, surname, password)
                            .then(() => {
                                return logic.logIn(username, password)
                                    .then(() => logic.retrieveUserData()
                                        .then(() => logic.addUserSeen(movie)
                                            .then(() => logic.addUserSeen(movie1)
                                                .then(() => logic.addUserSeen(movie3))
                                            )
                                        )
                                    )
                            })
                    })
                    it('should succeed on adding the state like to the movie, if it was in seen list', () => {
                        let check = logic.likeClick(id)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('10')

                        expect(logic._user.seen[0].like).to.be.true

                    })
                    it('should succeed on adding the state like to the movie, if it was in seen list, and deletting the state unlike if it was', () => {
                        let check = logic.likeClick(id3)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('10')

                        expect(logic._user.seen[2].like).to.be.true
                        expect(logic._user.seen[2].unlike).to.be.false


                    })
                    it('should succeed on deleting the state like to the movie, if it was in seen list and already had like state', () => {

                        let check = logic.likeClick(id1)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('00')

                        expect(logic._user.seen[1].like).to.be.false

                    })
                    it('should succeed on sending a warning if the movie was not in seen list', () => {

                        let check = logic.likeClick('111')

                        expect(check).to.be.a('string')

                        expect(check).to.equal('You should have seen the movie first')

                    })



                    afterEach(() => {
                        logic.logout()
                    })


                })
                describe('without user logged in', () => {
                    it('should succeed on returning an error if the user is not loged in ', () => {
                        let check = logic.likeClick(id)
                        expect(check).to.be.a('string')

                        expect(check).to.equal('You should log in before to use that feature')
                    })
                    it('should fail with undefined id', () => {
                        id = undefined
                        expect(() =>
                            logic.likeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with null id', () => {
                        id = null
                        expect(() =>
                            logic.likeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a string id (number)', () => {
                        id = 1234
                        expect(() =>
                            logic.likeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (boolean)', () => {
                        id = true
                        expect(() =>
                            logic.likeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (object)', () => {
                        id = {}
                        expect(() =>
                            logic.likeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (array)', () => {
                        id = []
                        expect(() =>
                            logic.likeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                })
            })

            describe('check unlike click', () => {
                let id = '123'
                let id1 = '293660'
                let id3 = '333'
                describe('with user logged in', () => {
                    let username, password
                    let movie = { id: '123', name: 'the great film', poster_path: 'http://...', like: false, unlike: false, favourite: false }
                    let movie1 = { id: '293660', name: 'the great film', poster_path: 'http://...', like: false, unlike: true, favourite: false }
                    let movie3 = { id: '333', name: 'the great film', poster_path: 'http://...', like: true, unlike: false, favourite: false }

                    beforeEach(() => {
                        const name = 'John', surname = 'Doe', email = 'john@john'
                        username = `jd-${Math.random()}`, password = '123'

                        return logic.signIn(username, email, name, surname, password)
                            .then(() => {
                                return logic.logIn(username, password)
                                    .then(() => logic.retrieveUserData()
                                        .then(() => logic.addUserSeen(movie)
                                            .then(() => logic.addUserSeen(movie1)
                                                .then(() => logic.addUserSeen(movie3))
                                            )
                                        )
                                    )
                            })
                    })
                    it('should succeed on adding the state unlike to the movie, if it was in seen list', () => {
                        let check = logic.unlikeClick(id)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('01')

                        expect(logic._user.seen[0].unlike).to.be.true

                    })
                    it('should succeed on adding the state unlike to the movie, if it was in seen list, and deletting the state like if it was', () => {
                        let check = logic.unlikeClick(id3)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('01')

                        expect(logic._user.seen[2].unlike).to.be.true
                        expect(logic._user.seen[2].like).to.be.false


                    })
                    it('should succeed on deleting the state unlike to the movie, if it was in seen list and already had unlike state', () => {

                        let check = logic.unlikeClick(id1)

                        expect(check).to.be.a('string')

                        expect(check).to.equal('00')

                        expect(logic._user.seen[1].unlike).to.be.false

                    })
                    it('should succeed on sending a warning if the movie was not in seen list', () => {

                        let check = logic.unlikeClick('111')

                        expect(check).to.be.a('string')

                        expect(check).to.equal('You should have seen the movie first')

                    })



                    afterEach(() => {
                        logic.logout()
                    })


                })
                describe('without user logged in', () => {
                    it('should succeed on returning an error if the user is not loged in ', () => {
                        let check = logic.unlikeClick(id)
                        expect(check).to.be.a('string')

                        expect(check).to.equal('You should log in before to use that feature')
                    })
                    it('should fail with undefined id', () => {
                        id = undefined
                        expect(() =>
                            logic.unlikeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with null id', () => {
                        id = null
                        expect(() =>
                            logic.unlikeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a string id (number)', () => {
                        id = 1234
                        expect(() =>
                            logic.unlikeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (boolean)', () => {
                        id = true
                        expect(() =>
                            logic.unlikeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (object)', () => {
                        id = {}
                        expect(() =>
                            logic.unlikeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                    it('should fail with not a object id (array)', () => {
                        id = []
                        expect(() =>
                            logic.unlikeClick(id)
                        ).to.throw(Error, `${id} is not a string`)
                    })
                })
            })

            describe('check beautify query', () => {

                it('should succeed on deleting + and adding space instead, and capitalizing first letter', () => {
                    let string = 'harry+potter'
                    let query = logic.beautifyQuery(string)

                    expect(query).to.be.a('string')

                    expect(query).to.equal('Harry potter')

                })
                
                it('should fail with undefined string', () => {
                    string = undefined
                    expect(() =>
                        logic.unlikeClick(string)
                    ).to.throw(Error, `${string} is not a string`)
                })
                it('should fail with null string', () => {
                    string = null
                    expect(() =>
                        logic.unlikeClick(string)
                    ).to.throw(Error, `${string} is not a string`)
                })
                it('should fail with not a string string (number)', () => {
                    string = 1234
                    expect(() =>
                        logic.unlikeClick(string)
                    ).to.throw(Error, `${string} is not a string`)
                })
                it('should fail with not a object string (boolean)', () => {
                    string = true
                    expect(() =>
                        logic.unlikeClick(string)
                    ).to.throw(Error, `${string} is not a string`)
                })
                it('should fail with not a object string (object)', () => {
                    string = {}
                    expect(() =>
                        logic.unlikeClick(string)
                    ).to.throw(Error, `${string} is not a string`)
                })
                it('should fail with not a object string (array)', () => {
                    string = []
                    expect(() =>
                        logic.unlikeClick(string)
                    ).to.throw(Error, `${string} is not a string`)
                })
            
        })

    })
})
})