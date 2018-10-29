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
            it('should succeed on correct data', () =>
                logic.registerUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(id => expect(id).to.be.a('string'))
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.registerUser('John', 'Doe', username, '123')
                    .then(id => {
                        expect(id).to.be.a('string')

                        return logic.registerUser('John', 'Doe', username, '123')
                    })
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            false && it('should fail on undefined name', () => {
                expect(() =>
                    logic.registerUser(undefined, 'Doe', 'jd', '123')
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