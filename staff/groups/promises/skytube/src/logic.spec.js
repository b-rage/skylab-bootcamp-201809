require('isomorphic-fetch')
global.sessionStorage = require('sessionstorage')
const logic = require('./logic')
const {expect} = require('chai')

describe ('logic', () => {
    describe('register', () => {
        it('should suceed on correct data', () => {
            return logic.registerUser('ana','san', `as-${Math.random()}`,'a@a','123', '123')
                .then(() => expect(true).to.be.true)

        })

        it('should save userId on sessionStorage', () =>
            logic.registerUser('ana','san', `as-${Math.random()}`,'a@a','123', '123')
                .then(() => expect(true).to.be.true)
                .then(() => {
                    const userId = sessionStorage.getItem('userId')
                    expect(userId).not.to.be.undefined
                })
        )

        it('should fail on trying to register with existing username', () => {
            let username = `as-${Math.random()}`
            return logic.registerUser('ana','san', username,'a@a','123', '123')
                .then(() => expect(true).to.be.true)
                .then(() => logic.registerUser('ana','san', username,'a@a','123', '123'))
                .catch( err => {
                    expect(err).not.to.be.undefined
                    expect(err.message).to.equal(`user with username "${username}" already exists`)
                })

        })

        //NAME TEST//

        it('should fail on undefined name', () => {
            expect(() =>
                logic.registerUser(undefined,'san', `as-${Math.random()}`,'a@a','123')

            ).to.throw(TypeError, `undefined is not a string`)
        })

        it ('should fail on empty name', () => {
            expect(() =>
                logic.registerUser('','san', `as-${Math.random()}`,'a@a','123')

            ).to.throw(Error, 'name is blank or empty')
        })

        it ('should fail on blank name', () => {
            expect(() =>
                logic.registerUser('        ','san', `as-${Math.random()}`,'a@a','123')

            ).to.throw(Error, 'name is blank or empty')
        })

        it ('should fail on incorrect name(number)', () => {
            expect(() =>
                logic.registerUser(123,'san', `as-${Math.random()}`,'a@a','123')

            ).to.throw(TypeError, `123 is not a string`)
        })

        it ('should fail on incorrect name(boolean)', () => {
            expect(() =>
                logic.registerUser(true,'san', `as-${Math.random()}`,'a@a','123')

            ).to.throw(TypeError, `true is not a string`)
        })

        it ('should fail on incorrect name(object)', () => {
            expect(() =>
                logic.registerUser({},'san', `as-${Math.random()}`,'a@a','123')

            ).to.throw(TypeError, `[object Object] is not a string`)
        })

        it ('should fail on incorrect name(array)', () => {
            expect(() =>
                logic.registerUser([],'san', `as-${Math.random()}`,'a@a','123')

            ).to.throw(TypeError, ` is not a string`)
        })

        //SURNAME TEST//

        it ('should fail on undefined surname', () => {
            expect(() =>
                logic.registerUser('dani', undefined, `dv-${Math.random()}`, 'd@d', '123')

            ).to.throw(TypeError, 'undefined is not a string')
        })

        it ('should fail on empty surname', () => {
            expect(() =>
                logic.registerUser('dani', '', `dv-${Math.random()}`, 'd@d', '123')

            ).to.throw(Error, 'surname is blank or empty')
        })

        it ('should fail on blank surname', () => {
            expect(() =>
                logic.registerUser('dani', '     ', `dv-${Math.random()}`, 'd@d', '123')

            ).to.throw(Error, 'surname is blank or empty')
        })

        it ('should fail on incorrect surname(number)', () => {
            expect(() =>
                logic.registerUser('dani', 123, `dv-${Math.random()}`, 'd@d', '123')

            ).to.throw(TypeError, '123 is not a string')
        })

        it ('should fail on incorrect surname(boolean)', () => {
            expect(() =>
                logic.registerUser('dani', true, `dv-${Math.random()}`, 'd@d', '123')

            ).to.throw(TypeError, 'true is not a string')
        })

        it ('should fail on incorrect surname(object)', () => {
            expect(() =>
                logic.registerUser('dani', {}, `dv-${Math.random()}`, 'd@d', '123')

            ).to.throw(TypeError, '[object Object] is not a string')
        })

        it ('should fail on incorrect surname(array)', () => {
            expect(() =>
                logic.registerUser('dani', [], `dv-${Math.random()}`, 'd@d', '123')

            ).to.throw(TypeError, ' is not a string')
        })

        //USERNAME TEST//

        it ('should fail on undefined username', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', undefined, 'd@d', '123')

            ).to.throw(TypeError, 'undefined is not a string')
        })

        it ('should fail on empty username', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', ' ', 'd@d', '123')

            ).to.throw(Error, 'username is blank or empty')
        })

        it ('should fail on blank username', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', '  ', 'd@d', '123')

            ).to.throw(Error, 'username is blank or empty')
        })

        it ('should fail on incorrect username(number)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 123, 'd@d', '123')

            ).to.throw(TypeError, '123 is not a string')
        })

        it ('should fail on incorrect username(boolean)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', true, 'd@d', '123')

            ).to.throw(TypeError, 'true is not a string')
        })

        it ('should fail on incorrect username(object)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', {}, 'd@d', '123')

            ).to.throw(TypeError, '[object Object] is not a string')
        })

        it ('should fail on incorrect username(array)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', [], 'd@d', '123')

            ).to.throw(TypeError, ' is not a string')
        })

        //EMAIL TEST//

        it ('should fail on undefined email', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', undefined, '123')

            ).to.throw(Error, 'undefined is not a string')
        })

        it ('should fail on empty email', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', '', '123')

            ).to.throw(Error, 'email is blank or empty')
        })

        it ('should fail on blank email', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', '   ', '123')

            ).to.throw(Error, 'email is blank or empty')
        })

        it ('should fail on incorrect email(number)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 123, '123')

            ).to.throw(TypeError, '123 is not a string')
        })

        it ('should fail on incorrect email(boolean)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', true, '123')

            ).to.throw(TypeError, 'true is not a string')
        })

        it ('should fail on incorrect email(object)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', {}, '123')

            ).to.throw(TypeError, '[object Object] is not a string')
        })

        it ('should fail on incorrect email(array)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', [], '123')

            ).to.throw(TypeError, ' is not a string')
        })

        //PASSWORD TEST//

        it ('should fail on undefined password', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 'd@d', undefined)

            ).to.throw(TypeError, 'undefined is not a string')
        })

        it ('should fail on empty password', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 'd@d', '')

            ).to.throw(Error, 'password is blank or empty')
        })

        it ('should fail on blank password', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 'd@d', '  ')

            ).to.throw(Error, 'password is blank or empty')
        })

        it ('should fail on incorrect password(number)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 'd@d', 666)

            ).to.throw(TypeError, '666 is not a string')
        })

        it ('should fail on incorrect password(boolean)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 'd@d', false)

            ).to.throw(TypeError, 'false is not a string')
        })

        it ('should fail on incorrect password(object)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 'd@d', {})

            ).to.throw(TypeError, '[object Object] is not a string')
        })

        it ('should fail on incorrect password(array)', () => {
            expect(() =>
                logic.registerUser('dani', 'ville', 'vior', 'd@d', [])

            ).to.throw(TypeError, ' is not a string')
        })
    })

    describe('login', () => {
        describe('test on autenticating existent user', () => {
            let username, password

            beforeEach(() => {
                const name = 'dani', surname = 'ville', email = 'da@da'

                username = `dv-${Math.random()}`
                password = `123-${Math.random()}`

                return logic.registerUser(name, surname, username, email, password, password)

            })

            it ('should succed on correct username', () =>
                logic.loginUser(username, password)
                    .then(() => expect(true).to.be.true)

            )

            it('should save userId on sessionStorage', () =>
                logic.loginUser(username, password)
                    .then(() => expect(true).to.be.true)
                    .then(() => {
                        const userId = sessionStorage.getItem('userId')
                        expect(userId).not.to.be.undefined
                    })
            )

            it ('should fail on incorrect username', () => {
                username = 'wrong'

                return logic.loginUser(username, password)
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" does not exist`)
                    })
            })

            it ('should fail on incorrect password', () => {
                password = '111'

                return logic.loginUser(username, password)
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`username and/or password wrong`)
                    })
            })
        })

        //USERNAME TEST//

        it('should fail on undefined username', () => {
            const username = undefined

            expect(() =>
                logic.loginUser(username, '123')
            ).to.throw(TypeError, `${username} is not a string`)
        })

        it('should fail on blank username', () => {
            const username = ' '

            expect(() =>
                logic.loginUser(username, '123')
            ).to.Throw(Error, `username is blank or empty`)
        })

        it('should fail on empty username', () => {
            const username = ''

            expect(() =>
                logic.loginUser(username, '123')
            ).to.throw(Error, 'username is blank or empty')
        })

        it('should fail on incorrect username(number)', () => {
            const username = 666

            expect(() =>
                logic.loginUser(username, '123')
            ).to.throw(TypeError, '666 is not a string')
        })

        it('should fail on incorrect username(boolean)', () => {
            const username = true

            expect(() =>
                logic.loginUser(username, '123')
            ).to.throw(TypeError, 'true is not a string')
        })

        it('should fail on incorrect username(object)', () => {
            const username = {}

            expect(() =>
                logic.loginUser(username, '123')
            ).to.throw(TypeError, '[object Object] is not a string')
        })

        it('should fail on incorrect username(array)', () => {
            const username = []

            expect(() =>
                logic.loginUser(username, '123')
            ).to.throw(TypeError, ' is not a string')
        })

        //PASSWORD TEST//

        it('should fail on undefined password', () => {
            const password = undefined

            expect(() =>
                logic.loginUser('username10', password)
            ).to.throw(TypeError, `${password} is not a string`)
        })

        it('should fail on blank password', () => {
            const password = ' '

            expect(() =>
                logic.loginUser('username10', password)
            ).to.Throw(Error, `password is blank or empty`)
        })

        it('should fail on empty password', () => {
            const password = ''

            expect(() =>
                logic.loginUser('username10', password)
            ).to.throw(Error, 'password is blank or empty')
        })

        it('should fail on incorrect password(number)', () => {
            const password = 666

            expect(() =>
                logic.loginUser('username10', password)
            ).to.throw(TypeError, '666 is not a string')
        })

        it('should fail on incorrect password(boolean)', () => {
            const password = true

            expect(() =>
                logic.loginUser('username10', password)
            ).to.throw(TypeError, 'true is not a string')
        })

        it('should fail on incorrect password(object)', () => {
            const password = {}

            expect(() =>
                logic.loginUser('username10', password)
            ).to.throw(TypeError, '[object Object] is not a string')
        })

        it('should fail on incorrect password(array)', () => {
            const password = []

            expect(() =>
                logic.loginUser('username10', password)
            ).to.throw(TypeError, ' is not a string')
        })
    })

    describe('logoutUser', () => {
        beforeEach(() => {
            sessionStorage.setItem('auth', JSON.stringify({
                id: Date.now(),
                token: Date.now()
            }))
        })

        it('should succed on deleting userId on sessionStorage', () => {
            let auth = sessionStorage.getItem('auth')
            expect(auth).not.to.be.undefined

            logic.logoutUser()

            auth = sessionStorage.getItem('auth')
            expect(auth).to.equal(null)
        })
    })

    describe ('search by query', () => {
        it('should succed on searching videos by query', () => {
            const query = 'Madonna'
            return logic.search(query)
                .then(res =>
                    expect(res).not.to.be.undefined
                )
        })

        it('shoul fail on undefined query', () => {
            const query = undefined
            expect(() =>
                logic.search(query)
            ).to.throw(TypeError, `${query} is not a string`)
        })

        it('shoul fail on incorrect query(number)', () => {
            const query = 123
            expect(() =>
                logic.search(query)
            ).to.throw(TypeError, `${query} is not a string`)
        })

        it('shoul fail on incorrect query(object)', () => {
            const query = {}
            expect(() =>
                logic.search(query)
            ).to.throw(TypeError, '[object Object] is not a string')
        })

        it('shoul fail on incorrect query(boolean)', () => {
            const query = true
            expect(() =>
                logic.search(query)
            ).to.throw(TypeError, `${query} is not a string`)
        })

        it('shoul fail on empty query', () => {
            const query = ''
            expect(() =>
                logic.search(query)
            ).to.throw(Error, 'query is blank or empty')
        })

        it('shoul fail on blank query', () => {
            const query = '     '
            expect(() =>
                logic.search(query)
            ).to.throw(Error, 'query is blank or empty')
        })
    })

    describe('retrieve a video', () => {
        it('should succed on correct data', () => {
            const video = {id: 'BaP1wDvkA6E'}

            logic.getVideo(video)
                .then(res => expect(res).not.to.be.undefined)
                .catch(res => expect(res).to.be.undefined)
        })

        it('should fail on undefined video', () => {
            const video = undefined

            expect(() =>
                logic.getVideo(video)
            ).to.throw(TypeError, `${video} is not an object`)
        })
    })

    describe('get most popular videos', () => {
        it('should succed', () => {
            logic.getMostPopular()
                .then(res => expect(res).not.to.be.undefined)
                .catch(res => expect(res).to.be.undefined)
        })
    })
})
