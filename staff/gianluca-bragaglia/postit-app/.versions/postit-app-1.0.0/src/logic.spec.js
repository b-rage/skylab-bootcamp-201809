//import logic from './logic'

const sessionStorage = require('sessionstorage')

global.sessionStorage = sessionStorage

const logic = require('./logic')

const { expect } = require('chai')

describe('logic', () => {
    beforeEach(() => {
        sessionStorage.clear()

        sessionStorage.setItem('postits', JSON.stringify([]))
        sessionStorage.setItem('users', JSON.stringify([]))
    })

    describe('users', () => {
        describe('register', () => {
            it('should succeed on correct data', () => {
                expect(() =>
                    logic.registerUser('John', 'Doe', 'jd', '123')
                ).not.to.throw()
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.registerUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other cases
        })

        describe('login', () => {
            beforeEach(() => {
                const user = { name: 'John', surname: 'Doe', username: 'jd', password: '123', id: Date.now() }

                const users = [user]

                sessionStorage.setItem('users', JSON.stringify(users))
            })

            it('should succeed on correct data', () => {
                expect(() =>
                    logic.loginUser('jd', '123')
                ).not.to.throw()
            })

            it('should fail on undefined username', () => {
                expect(() =>
                    logic.loginUser(undefined, '123')
                ).to.throw(Error, 'wrong credentials')
            })

            // TODO other cases
        })
    })

    describe('users', () => {
        // TODO  
    })
})