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

            true && it('should fail on undefined name', () => {
                expect(() =>
                    logic.registerUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            true && it('should fail on undefined surname', () => {
                expect(() =>
                    logic.registerUser('John', undefined, 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            true && it('should fail on undefined username', () => {
                expect(() =>
                    logic.registerUser('John', 'Doe', undefined, '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            true && it('should fail on undefined password', () => {
                expect(() =>
                    logic.registerUser('John', 'Doe', 'jd', undefined)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other cases
        })

        true && describe('authenticate', () => {
            
            describe('with existin user', () => {

                let username = `jd-${Math.random()}`
                
                beforeEach(() => {
                    username = `jd-${Math.random()}`
                    return logic.registerUser('John', 'Doe', username, '123')       
                })
                
                it('should succeed on correct data', () => 
                logic.authenticate(username, '123')
                .then(status => expect(status).to.equal('OK'))
                )
                
                it('should fail on unregistered name user', () => {
                    const userName = `jd-${Math.random()}`
                    
                    return logic.authenticate(userName, '123')
                    .then(status => expect(status).to.equal('KO'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${userName}" does not exist`)
                    })
                })
                
                it('should fail on registered name user but wrong password', () => {
                    
                    return logic.authenticate(username, '12')
                    .then(status => expect(status).to.equal('KO'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal("username and/or password wrong")
                    })
                })
            })
                
            true && it('should fail on undefined username', () => {
                expect(() =>
                    logic.authenticate(undefined, '123')
                ).to.throw(Error, 'undefined is not a string')
            })

            true && it('should fail on undefined password', () => {
                expect(() =>
                    logic.authenticate('username', undefined)
                ).to.throw(Error, 'undefined is not a string')
            })

            // TODO other cases
        })
    })

    describe('postits', () => {
        // TODO  
    })
})