const { expect } = require('chai')
const LOGIC = require('./logic')

describe('Logic', function () {
    describe('addBoard', function () {
        it('should fail on object as form', function () {
            expect(function() {
                LOGIC.addBoard({})
            }).to.throw('no form passed as argument')
        })

        it('should fail on empty form argument', function () {
            expect(function() {
                LOGIC.addBoard()
            }).to.throw('no form passed as argument')
        })
    })

    describe('deleteBoard', function () {
        it('should fail on invalid id', function () {
            expect(function() {
                LOGIC.deleteBoard()
            }).to.throw('id is not valid')
        })
    })

    describe('updateBoard', function () {
        it('should fail on invalid id', function () {
            expect(function() {
                LOGIC.updateBoard()
            }).to.throw('id is not valid')
        })

        it('should fail on invalid title', function () {
            expect(function() {
                LOGIC.updateBoard(1)
            }).to.throw('title is not valid')
        })
    })

    describe('addPost', function () {
        it('should fail on object as input', function () {
            expect(function() {
                LOGIC.addPost({})
            }).to.throw('no input passed as argument')
        })

        it('should fail on empty input argument', function () {
            expect(function() {
                LOGIC.addPost()
            }).to.throw('no input passed as argument')
        })
    })

    describe('deletePost', function () {
        it('should fail on invalid id', function () {
            expect(function() {
                LOGIC.deletePost()
            }).to.throw('id is not valid')
        })
    })

    describe('register', function () {
        it('should fail on object as form', function () {
            expect(function() {
                LOGIC.register({})
            }).to.throw('no form passed as argument')
        })

        it('should fail on empty form argument', function () {
            expect(function() {
                LOGIC.register()
            }).to.throw('no form passed as argument')
        })
    })

    describe('login', function () {
        it('should fail on non form argument', function () {
            expect(function() {
                LOGIC.login({})
            }).to.throw('no form passed as argument')
        })

        it('should fail on empty form argument', function () {
            expect(function() {
                LOGIC.login()
            }).to.throw('no form passed as argument')
        })
    })

    describe('findAuth', function () {
        it('should fail on invalid username', function () {
            expect(function() {
                LOGIC.findAuth()
            }).to.throw('username is not valid')
        })

        it('should fail on invalid password', function () {
            expect(function() {
                LOGIC.findAuth('username')
            }).to.throw('password is not valid')
        })
    })

    describe('validate', function () {
        it('should fail on object as form', function () {
            expect(function() {
                LOGIC.validate({})
            }).to.throw('no form passed as argument')
        })

        it('should fail on empty form argument', function () {
            expect(function() {
                LOGIC.validate()
            }).to.throw('no form passed as argument')
        })
    })

    describe('error', function () {
        it('should fail on invalid message', function () {
            expect(function() {
                LOGIC.error()
            }).to.throw('message is not valid')
        })
    })
})
