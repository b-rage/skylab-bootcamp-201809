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
                logic.createUser('John', 'Doe', 'jd@jd.com', `jd-${Math.random()}`, '123')
                    .then(id => expect(id).to.be.a('string'))
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.createUser('John', 'Doe', 'jd@jd.com', username, '123')
                    .then(id => {
                        expect(id).to.be.a('string')

                        return logic.createUser('John', 'Doe', 'jd@jd.com', username, '123')
                    })
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.createUser(undefined, 'Doe','jd@jd.com',  'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other cases
        })

        describe('authenticate', () => {
            
            logic.createUser('John', 'Doe', 'jd@jd.com', 'jd-1455', '123')
   

            it('should succeed on correct data', () =>
                logic.loginUser('jd-1455', '123')
                    .then(id => expect(id).to.be.a('string'))
            )

            it('should fail on wrong username', () => {
                
                return logic.loginUser('pepa', '123')

                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username \"pepa\" does not exist`)
                    })
            })

            it('should fail on wrong password', () => {
                
                logic.loginUser('jd-1455', '1234')

                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`username and/or password wrong`)
                    })
                
            })
            // TODO other cases
        })
    })

    describe('users', () => {
        // TODO  
    })
})