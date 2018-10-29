//import logic from './logic'

require('isomorphic-fetch')

const logic = require('./userService')

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

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.registerUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            
        })

        describe('authenticate', () => {
            
            let name = "John"
            let surname = "Doe"
            let username = "username-"  + Math.random()    
            let password = "123-" + Math.random()

            //podemos ejecutar una funcion que devuelve una promise en el beforeEach si necesitamos que los it ejecuten una lógica previa.
            //hay que poner el return dado que no estamos interceptando el then o e catch de la promise en **
            beforeEach(() => {
                
                name = "John"
                surname = "Doe"
                username = "username-"  + Math.random()    
                password = "123-" + Math.random()

                //**
                return logic.registerUser(name, surname, username, password)

            })

            it('should not succeed on incorrect data', () => {
               
                logic.authenticateUser(username, "adssadasd").catch(error => {

                    expect(error.message).to.be.equal("username and/or password wrong")
                
                })

            })

            it('should succeed on correct data', () => {
               
                logic.authenticateUser(username, password).then(res => {

                    expect(res.id).to.be.a("string")
                    expect(res.token).to.be.a("string")
                
                })

            })

            it('should fail on wrong username', () => {
               
                logic.authenticateUser("ffff", password).catch(error => {

                    expect(error).not.to.be.undefined
                    expect(error.message).to.be.equal(`user with username "ffff" does not exist`)
                
                })

            })

            it('should fail on wrong password', () => {
               
                logic.authenticateUser(username, "rerer").catch(error => {

                    expect(error).not.to.be.undefined
                    expect(error.message).to.be.equal("username and/or password wrong")
                
                })

            })

            it('should fail on undefined username', () => {
                expect(() =>
                    logic.authenticateUser(undefined, '123')
                ).to.throw(Error, 'undefined is not a string')
            })

            it('should fail on undefined username', () => {
                expect(() =>
                    logic.authenticateUser("jose", undefined)
                ).to.throw(Error, 'undefined is not a string')
            })

            it('should fail on empty username', () => {
                expect(() =>
                    logic.authenticateUser("", '123')
                ).to.throw(Error, 'username is empty')
            })

            it('should fail on empty password', () => {
                expect(() =>
                    logic.authenticateUser("jose", "")
                ).to.throw(Error, 'password is empty')
            })

            
        })
    })

})