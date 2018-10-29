//import logic from './logic'

require('isomorphic-fetch')

const logic = require('./logic')

const { expect } = require('chai')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logic', () => {
    beforeEach(() => {
        // ?
    })

    describe('users', () => {
        describe('register', () => {
            debugger
            it('should succeed on correct data', () =>
            
                logic.createUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(                        id => expect(id).to.be.a('string'))
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.createUser('John', 'Doe', username, '123')
                    .then(id => {
                        expect(id).to.be.a('string')

                        return logic.createUser('John', 'Doe', username, '123')
                    })
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on trying leaving name blank', () => {
                return logic.createUser('             /n', 'Doe',`jd-${Math.random()}` , '123')
                    .then(id => {
                        expect(id).to.be.a('string')
                    }).catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`name is empty or blank`)
                    })
            })

            it('should fail on trying leaving surname blank', () => {
                return logic.createUser('John', '             /n',`jd-${Math.random()}`, '123')
                    .then(id => {
                        expect(id).to.be.a('string')
                    }).catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`surname is empty or blank`)
                    })
            })

           false && it('should fail on trying leaving username blank', () => {
                return logic.createUser('John', 'Doe',`           /n`, '123')
                    .then(id => {
                        expect(id).to.be.a('string')
                    }).catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`username is empty or blank`)
                    })
            })

            it('should fail on trying leaving password blank', () => {
                return logic.createUser('John', 'Doe',`jd-${Math.random()}`, '             /n')
                    .then(id => {
                        expect(id).to.be.a('string')
                    }).catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`password is empty or blank`)
                    })
            })

            it('should fail on non string name (number)', () => {
                return logic.createUser(123, 'Doe',`jd-${Math.random()}`, '             /n')
                    .then(id => {
                        expect(id).to.be.a('string')
                    }).catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`${name} is not a string`)
                    })
            })

            false && it('should fail on undefined name', () => {
                expect(() =>
                    logic.createUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other cases
        })

        false && describe('authenticate', () => {
            beforeEach(() => {
                const user = { name: 'John', surname: 'Doe', username: 'jd', password: '123', id: Date.now() }

                const users = [user]

                sessionStorage.setItem('users', JSON.stringify(users))
            })

            it('should succeed on correct data', () => {
                expect(() =>
                    logic.authenticate('jd', '123')
                ).not.to.throw()
            })

            it('should fail on undefined username', () => {
                expect(() =>
                    logic.authenticate(undefined, '123')
                ).to.throw(Error, 'wrong credentials')
            })

            // TODO other cases
        })
    })

    describe('users', () => {
        // TODO  
    })
})