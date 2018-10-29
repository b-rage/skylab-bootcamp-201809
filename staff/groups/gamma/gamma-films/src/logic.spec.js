//import logic from './logic'

require('isomorphic-fetch')

global.sessionStorage = require('sessionstorage')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

const logic = require('./logic')

const data = require('./data')

const { expect } = require('chai')

const flag = true


describe('logic', () => {
    describe('users', () => {
        flag && describe('register', () => {
            it('should succeed on correct data', () =>
                logic.registUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(() => expect(true).to.be.true)
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.registUser('John', 'Doe', username, '123')
                    .then(() => logic.registUser('John', 'Doe', username, '123'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.registUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null name', () => {
                expect(() =>
                    logic.registUser(null, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object name', () => {
                expect(() =>
                    logic.registUser({}, 'Doe', 'jd', '123')
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty name', () => {
                expect(() =>
                    logic.registUser('      ', 'Doe', 'jd', '123')
                ).to.throw(Error, 'name is empty or blank')
            })

            it('should fail on undefined surname', () => {
                expect(() =>
                    logic.registUser('Jhon', undefined, 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null surname', () => {
                expect(() =>
                    logic.registUser('Jhon', null, 'jd', '123')
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object surname', () => {
                expect(() =>
                    logic.registUser('Jhon', {}, 'jd', '123')
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty surname', () => {
                expect(() =>
                    logic.registUser('Jhon', '      ', 'jd', '123')
                ).to.throw(Error, 'surname is empty or blank')
            })

            it('should fail on undefined username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', undefined, '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', null, '123')
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', {}, '123')
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', '      ', '123')
                ).to.throw(Error, 'username is empty or blank')
            })

            it('should fail on undefined password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', undefined)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', null)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', {})
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', '      ')
                ).to.throw(Error, 'password is empty or blank')
            })
        })

        flag && describe('login', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logic.registUser(name, surname, username, password)
                })

                it('should succeed on correct data', () =>
                    logic.loginUser(username, password)
                        .then(() => expect(true).to.be.true)
                )

                it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logic.loginUser(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logic.loginUser(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })
            })

            it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on object username', () => {
                const username = {}

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `[object Object] is not a string`)
            })

            it('should fail on undefined password', () => {
                const password = undefined

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `${password} is not a string`)
            })

            it('should fail on boolean password', () => {
                const password = true

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `${password} is not a string`)
            })

            it('should fail on numeric password', () => {
                const password = 123

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `${password} is not a string`)
            })

            it('should fail on object password', () => {
                const password = {}

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `[object Object] is not a string`)
            })

        })

        flag && describe('searchMovies', () => {

            it('should succes on correct query', () => {
                const search = 'Batman'
                return logic.searchMovies(search)
                    .then(() => expect(true).to.be.true)
            })

            it('should fail on undefined query', () => {
                const search = undefined
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null query', () => {
                const search = null
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object query', () => {
                const search = {}
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty query', () => {
                const search = '    \t'
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(Error, 'query is empty or blank')
            })

        })

        flag && describe('searchMovies', () => {

            it('should succes on correct query', () => {
                const search = 'Batman'
                return logic.searchMovies(search)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an Array length 20', () => {
                const search = 'Batman'
                return logic.searchMovies(search)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                        expect(results).to.have.lengthOf(20)

                    })
            })

            it('should fail on undefined query', () => {
                const search = undefined
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null query', () => {
                const search = null
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object query', () => {
                const search = {}
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty query', () => {
                const search = '    \t'
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(Error, 'query is empty or blank')
            })

        })

        flag && describe('searchMovie', () => {

            it('should succes on correct id', () => {
                const id = '268' //id of Batman
                return logic.searchMovie(id)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an object', () => {
                const id = '268'
                return logic.searchMovie(id)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('object')
                        expect(results.original_title).to.equal('Batman')

                    })
            })

            it('should fail on undefined id', () => {
                const id = undefined
                expect(() =>
                    logic.searchMovie(id)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null id', () => {
                const id = null
                expect(() =>
                    logic.searchMovie(id)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object id', () => {
                const id = {}
                expect(() =>
                    logic.searchMovie(id)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty id', () => {
                const id = '    \t'
                expect(() =>
                    logic.searchMovie(id)
                ).to.throw(Error, 'id is empty or blank')
            })

        })

        flag && describe('searchMoviesByCategories', () => {

            it('should succes on correct genres', () => {
                const genres = '14' //s of Fantasy
                return logic.searchMoviesByCategories(genres)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an object', () => {
                const genres = '14'
                return logic.searchMoviesByCategories(genres)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                        expect(results).to.have.lengthOf(20)

                    })
            })

            it('should fail on undefined s', () => {
                const genres = undefined
                expect(() =>
                    logic.searchMoviesByCategories(genres)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null s', () => {
                const genres = null
                expect(() =>
                    logic.searchMoviesByCategories(genres)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object s', () => {
                const genres = {}
                expect(() =>
                    logic.searchMoviesByCategories(genres)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty s', () => {
                const genres = '    \t'
                expect(() =>
                    logic.searchMoviesByCategories(genres)
                ).to.throw(Error, 's is empty or blank')
            })

        })

        flag && describe('searchPopularMovies', () => {

            it('should succes on correct date', () => {
                const date = 'week'
                return logic.searchPopularMovies(date)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an object', () => {
                const date = 'week'
                return logic.searchPopularMovies(date)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                        expect(results).to.have.lengthOf(20)

                    })
            })

            it('should fail on undefined date', () => {
                const date = undefined
                expect(() =>
                    logic.searchPopularMovies(date)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null date', () => {
                const date = null
                expect(() =>
                    logic.searchPopularMovies(date)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object date', () => {
                const date = {}
                expect(() =>
                    logic.searchPopularMovies(date)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty date', () => {
                const date = '    \t'
                expect(() =>
                    logic.searchPopularMovies(date)
                ).to.throw(Error, 'date is empty or blank')
            })

        })

        flag && describe('listFavourites', () => {
            
            beforeEach(() => {

                const username = 'gamma', password = 'gamma'

                return logic.loginUser(username, password)
            })

            it('should succes on correct user Id', () => {
                return logic.listFavourites()
                    .then(() => expect(true).to.be.true)
            })

            it('should return an array', () => {
                
                return logic.listFavourites()
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                    })
            })

        })

        flag && describe('updateFavourites', () => {
            
            beforeEach(() => {

                const username = 'gamma', password = 'gamma'

                return logic.loginUser(username, password)

                
                
            })

            it('should succes on correct inputs', () => {

                let fav = []
                
                let id = "454992"

                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
               
                return logic.updateFavourites(fav, id, image)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an true', () => {

                let fav = []
                let id = "454992"
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                
                return logic.updateFavourites(fav, id, image)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('boolean')
                    })
            })

            it('should fail on undefined fav', () => {
                let fav = undefined
                let id = "454992"
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, 'undefined is not a array')
            })

            it('should fail on null fav', () => {
                let fav = null
                let id = "454992"
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, 'null is not a array')
            })

            it('should fail on object fav', () => {
                let fav = {}
                let id = "454992"
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, '[object Object] is not a array')
            })

            it('should fail on empty fav', () => {
                let fav = '    '
                let id = "454992"
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(Error, '     is not a array')
            })

            it('should fail on undefined id', () => {
                let fav = []
                let id = undefined
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null id', () => {
                let fav = []
                let id = null
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object id', () => {
                let fav = []
                let id = {}
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty id', () => {
                let fav = []
                let id = "   "
                let image = "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(Error, 'id is empty or blank')
            })

            it('should fail on undefined image', () => {
                let fav = []
                let id = '454992'
                let image = undefined
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null image', () => {
                let fav = []
                let id = '454992'
                let image = null
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object image', () => {
                let fav = []
                let id = '454992'
                let image = {}
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty image', () => {
                let fav = []
                let id = '454992'
                let image = "\t\t\t"
                expect(() =>
                    logic.updateFavourites(fav, id, image)
                ).to.throw(Error, 'image is empty or blank')
            })


        })

        flag && describe('removeFavourites', () => {
            describe('with existing user', () => {
                let username, password, fav, id, image

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`
                    id = "374720"
                    image = "/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg"
                    fav =[{id: "454992", urlImage: "/2lIr27lBdxCpzYDl6WUHzzD6l6H.jpg"}]

                    // text = `hello ${Math.random()}`

                    return logic.registUser(name, surname, username, password)
                        .then(() => logic.loginUser(username, password))
                        .then(() => logic.updateFavourites(fav, id, image))
                })

                describe('with existing fav', () => {
                    
                    it('should succeed', () =>
                        logic.removeFavourites(fav, id)
                            .then(() => expect(true).to.be.true)
                    )
                })

                it('should fail on undefined fav', () => {
                    let fav = undefined
                    let id = "454992"
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(TypeError, 'undefined is not a array')
                })
    
                it('should fail on null fav', () => {
                    let fav = null
                    let id = "454992"
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(TypeError, 'null is not a array')
                })
    
                it('should fail on object fav', () => {
                    let fav = {}
                    let id = "454992"
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(TypeError, '[object Object] is not a array')
                })
    
                it('should fail on empty fav', () => {
                    let fav = '    '
                    let id = "454992"
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(Error, '     is not a array')
                })
    
                it('should fail on undefined id', () => {
                    let fav = []
                    let id = undefined
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(TypeError, 'undefined is not a string')
                })
    
                it('should fail on null id', () => {
                    let fav = []
                    let id = null
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(TypeError, 'null is not a string')
                })
    
                it('should fail on object id', () => {
                    let fav = []
                    let id = {}
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(TypeError, '[object Object] is not a string')
                })
    
                it('should fail on empty id', () => {
                    let fav = []
                    let id = "   "
                    expect(() =>
                        logic.removeFavourites(fav, id)
                    ).to.throw(Error, 'id is empty or blank')
                })
            })
        })
        

        flag && describe('searchTrailer', () => {

            it('should succes on correct id', () => {
                const id = '268' //id of Batman
                return logic.searchTrailer(id)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an array', () => {
                const id = '268'
                return logic.searchTrailer(id)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                        expect(results[0]).to.be.a('object')
                        expect(results[0].key).to.be.a('string')

                    })
            })

            it('should fail on undefined id', () => {
                const id = undefined
                expect(() =>
                    logic.searchTrailer(id)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null id', () => {
                const id = null
                expect(() =>
                    logic.searchTrailer(id)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object id', () => {
                const id = {}
                expect(() =>
                    logic.searchTrailer(id)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty id', () => {
                const id = '    \t'
                expect(() =>
                    logic.searchTrailer(id)
                ).to.throw(Error, 'id is empty or blank')
            })


        })

        flag && describe('searcNowPlaying', () => {
            
            it('should succes on search', () => {
                return logic.searcNowPlaying()
                    .then(() => expect(true).to.be.true)
            })

            it('should return an array', () => {
                
                return logic.searcNowPlaying()
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                    })
            })

        })

        flag && describe('searchCharacters', () => {

            it('should succes on correct date', () => {
                const id = '268'
                return logic.searchCharacters(id)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an array', () => {
                const id = '268'
                return logic.searchCharacters(id)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                    })
            })

            it('should fail on undefined id', () => {
                const id = undefined
                expect(() =>
                    logic.searchCharacters(id)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null id', () => {
                const id = null
                expect(() =>
                    logic.searchCharacters(id)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object id', () => {
                const id = {}
                expect(() =>
                    logic.searchCharacters(id)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty id', () => {
                const id = '    \t'
                expect(() =>
                    logic.searchCharacters(id)
                ).to.throw(Error, 'id is empty or blank')
            })

        })

        flag && describe('getReviews', () => {

            it('should succes on correct id', () => {
                const id = '268' //id of Batman
                return logic.getReviews(id)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an array', () => {
                const id = '351286'
                return logic.getReviews(id)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                        expect(results).to.be.a('array')
                        expect(results[0]).to.be.a('object')
                    })
            })

            it('should fail on undefined id', () => {
                const id = undefined
                expect(() =>
                    logic.getReviews(id)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null id', () => {
                const id = null
                expect(() =>
                    logic.getReviews(id)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object id', () => {
                const id = {}
                expect(() =>
                    logic.getReviews(id)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty id', () => {
                const id = '    \t'
                expect(() =>
                    logic.getReviews(id)
                ).to.throw(Error, 'id is empty or blank')
            })


        })

    })
})