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
                    logic.createUser('John', 'Doe', 'jd@jd.com', 'jd', '123')
                ).not.to.throw()
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.createUser(undefined, 'Doe', 'jd@jd.com', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on number name', () => {
                expect(() =>
                    logic.createUser(12, 'Doe', 'jd@jd.com', 'jd', '123')
                ).to.throw(TypeError, '12 is not a string')
            })

            it('should fail on empty name', () => {
                expect(() =>
                    logic.createUser(' ', 'Doe', 'jd@jd.com', 'jd', '123')
                ).to.throw('name is empty or blank')
            })

            it('should fail on array name', () => {
                expect(() =>
                    logic.createUser([' '], 'Doe', 'jd@jd.com', 'jd', '123')
                ).to.throw('  is not a string')
            })

            it('should fail on object name', () => {
                expect(() =>
                    logic.createUser({}, 'Doe', 'jd@jd.com', 'jd', '123')
                ).to.throw('[object Object] is not a string')
            })

            // TODO other cases
        })

        describe('authenticate', () => {
            beforeEach(() => {
                const user = { name: 'John', surname: 'Doe', email: 'jd@jd.com', username: 'jd', password: '123', id: Date.now() }

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

            it('should fail on number username', () => {
                expect(() =>
                    logic.loginUser(12, '123')
                ).to.throw(Error, 'wrong credentials')
            })

            it('should fail on empty username', () => {
                expect(() =>
                    logic.loginUser(' ', '123')
                ).to.throw(Error, 'wrong credentials')
            })

            it('should fail on array username', () => {
                expect(() =>
                    logic.loginUser([' '], '123')
                ).to.throw(Error, 'wrong credentials')
            })
            
            it('should fail on object username', () => {
                expect(() =>
                    logic.loginUser({}, '123')
                ).to.throw(Error, 'wrong credentials')
            })

            it('should fail on undefined password', () => {
                expect(() =>
                    logic.loginUser('john', undefined)
                ).to.throw(Error, 'wrong credentials')
            })

            it('should fail on number password', () => {
                expect(() =>
                    logic.loginUser('john', 12)
                ).to.throw(Error, 'wrong credentials')
            })

            it('should fail on empty password', () => {
                expect(() =>
                    logic.loginUser('john', '')
                ).to.throw(Error, 'wrong credentials')
            })

            it('should fail on array username', () => {
                expect(() =>
                    logic.loginUser('john', [' '])
                ).to.throw(Error, 'wrong credentials')
            })
            
            it('should fail on object username', () => {
                expect(() =>
                    logic.loginUser('john', {})
                ).to.throw(Error, 'wrong credentials')
            })

            // TODO other cases
        })
    })

    describe('users', () => {
        // TODO  
    })
})