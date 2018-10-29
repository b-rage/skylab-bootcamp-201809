//import logic from './logic'

require('isomorphic-fetch')

global.sessionStorage = require('sessionstorage')

const logic = require('./logic')

logic._app = 'test-pintegram'

const { expect } = require('chai')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logic', () => {
    describe('users', () => {
    true && describe('register', () => {
            it('should succeed on correct data', () =>
                logic.registerUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(() => expect(true).to.be.true)
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.registerUser('John', 'Doe', username, '123')
                    .then(() => logic.registerUser('John', 'Doe', username, '123'))
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

            afterEach(() => logic.logout())

            // TODO other cases
        })

    true && describe('login', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logic.registerUser(name, surname, username, password)
                })

                it('should succeed on correct data', () =>
                    logic.login(username, password)
                        .then(() => expect(true).to.be.true)
                )

                it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logic.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logic.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })

                afterEach(() => logic.logout())
            })

            it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            // TODO other cases
        })
    })

true && describe('posts', () => {
        describe('create', () => {
            describe('with existing user', () => {
                let username, password, text

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`
                    text = `hello ${Math.random()}`

                    return logic.registerUser(name, surname, username, password)
                        .then(() => logic.login(username, password))
                })

                it('should succeed on correct data', () =>
                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => expect(true).to.be.true)
                )

                afterEach(() => logic.logout())
            })
        })

    true && describe('list posts of one user', () => {
            describe('with existing user', () => {
                let username, password, text

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    text = `hello ${Math.random()}`

                    return logic.registerUser(name, surname, username, password)
                        .then(() => logic.login(username, password))
                })

                describe('with existing post', () => {
                    beforeEach(() => logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text))

                    it('should return posts', () =>
                        logic.listPosts()
                            .then(posts => {
                                expect(posts).not.to.be.undefined
                                expect(posts.length).to.equal(1)
                            })
                    )
                })

                it('should return no posts', () =>
                    logic.listPosts()
                        .then(posts => {
                            expect(posts).not.to.be.undefined
                            expect(posts.length).to.equal(0)
                        })
                )

                afterEach(() => logic.logout())
            })
        })


        describe('list posts of all users', () => {
            describe('with existing user', () => {
                let username, password, text

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    text = `hello ${Math.random()}`

                    return logic.registerUser(name, surname, username, password)
                        .then(() => logic.login(username, password))
                })

                describe('with existing post', () => {
                    beforeEach(() => logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text))

                    it('should return all posts', () =>
                        logic.listAllPosts()
                            .then(posts => {
                                expect(posts).not.to.be.undefined
                            })
                    )
                })


                afterEach(() => logic.logout())
            })
        })




    true && describe('delete', () => {
            describe('with existing user', () => {
                let username, password, text, postId

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    text = `hello ${Math.random()}`

                    return logic.registerUser(name, surname, username, password)
                        .then(() => logic.login(username, password))
                })

                describe('with existing post', () => {
                    beforeEach(() =>
                        logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                            .then(() => logic.listPosts())
                            .then(posts => postId = posts[0].id)
                    )

                    it('should succeed', () =>
                        logic.deletePost(postId)
                            .then(() => logic.listPosts())
                            .then(posts => expect(posts.length).to.equal(0))
                    )
                })

                afterEach(() => logic.logout())
            })
        })


        // describe('update', () => {
        //     describe('with existing user', () => {
        //         let username, password, text, postId

        //         beforeEach(() => {
        //             const name = 'John', surname = 'Doe'

        //             username = `jd-${Math.random()}`
        //             password = `123-${Math.random()}`

        //             text = `hello ${Math.random()}`

        //             return logic.registerUser(name, surname, username, password)
        //                 .then(() => logic.login(username, password))
        //         })

        //         describe('with existing post', () => {
        //             let newText

        //             beforeEach(() => {
        //                 newText = `hello ${Math.random()}`

        //                 return logic.createpost(text)
        //                     .then(() => logic.listposts())
        //                     .then(([post]) => postId = post.id)
        //             })

        //             it('should succeed', () =>
        //                 logic.updatepost(postId, newText)
        //                     .then(() => {
        //                         expect(true).to.be.true

        //                         return logic.listposts()
        //                     })
        //                     .then(posts => {
        //                         expect(posts).not.to.be.undefined
        //                         expect(posts.length).to.equal(1)

        //                         const [post] = posts

        //                         expect(post.id).to.equal(postId)
        //                         expect(post.text).to.equal(newText)
        //                     })
        //             )
        //         })
        // afterEach(() => logic.logout())
        //     })
        // })
    })
true && describe('logout', () => {
        describe('with existing user', () => {
            let username, password

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })
            it('should succesfully log out', () => {

                logic.logout(user => {
                    expect(user._userId).to.equal(null)
                    expect(user._token).to.equal(null)
                    expect(user._posts).to.equal([])
                    expect(user._postsUser).to.equal([])
                    expect(user._postsAllUser).to.equal([])
                    expect(user._likes).to.equal([])
                    expect(user._follows).to.equal([])
                    expect(user._followers).to.equal([])
                    expect(user._postLiked).to.equal([])
                    expect(user._comments).to.equal([])
                    expect(user._postsOtherUser).to.equal([])
                    expect(sessionStorage.getItem('userId')).to.equal(null)
                    expect(sessionStorage.getItem('token')).to.equal(null)


                })

            })
        })


    })


true && describe('add like', () => {
        describe('with existing user', () => {
            let username, password, text, postId

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() =>
                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => logic.listPosts())
                        .then(posts => postId = posts[0].id)
                )

                it('should successfully add like to post', () =>

                    logic.addLike(postId)
                        .then(expect(logic._likes[logic._likes.length - 1]).to.equal(postId))
                        .then(() => logic.listLikes())
                        .then(likes => expect(likes.length).to.equal(1))

                )

                it('should fail on non-number postId (string)', () => {
                    const postId = 'holacaracola'

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })
                it('should fail on non-number postId (Array)', () => {
                    const postId = []

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, ` is not a number`)
                })
                it('should fail on non-number postId (object)', () => {
                    const postId = {}

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `[object Object] is not a number`)
                })
                it('should fail on non-number postId (boolean)', () => {
                    const postId = true

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })
                it('should fail on non-number postId (undefined)', () => {
                    const postId = undefined

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })
                it('should fail on non-number postId (null)', () => {
                    const postId = null

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })

                afterEach(() => logic.logout())
            })

        })
    })

true && describe('list likes', () => {
        describe('with existing user', () => {
            let username, password, text, postId

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() =>
                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => logic.listPosts())
                        .then(posts => postId = posts[0].id)
                )

                it('should successfully list likes on a liked post', () =>

                    logic.addLike(postId)
                        .then(expect(logic._likes[logic._likes.length - 1]).to.equal(postId))
                        .then(() => logic.listLikes())
                        .then(likes => expect(likes.length).to.equal(1))

                )






                afterEach(() => logic.logout())
            })

        })


    })




true && describe('liked post', () => {
        describe('with existing user', () => {
            let username, password, text, postId

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() =>
                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => logic.listPosts())
                        .then(posts => postId = posts[0].id)
                )

                it('should successfully find liked post', () =>

                    logic.addLike(postId)
                        .then(expect(logic._likes[logic._likes.length - 1]).to.equal(postId))
                        .then(() => logic.likedPost(postId))
                        .then(like => expect(like).to.equal(true))

                )
                it('should fail on non-number postId (string)', () => {
                    const postId = 'holacaracola'

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })
                it('should fail on non-number postId (Array)', () => {
                    const postId = []

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, ` is not a number`)
                })
                it('should fail on non-number postId (object)', () => {
                    const postId = {}

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `[object Object] is not a number`)
                })
                it('should fail on non-number postId (boolean)', () => {
                    const postId = true

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })
                it('should fail on non-number postId (undefined)', () => {
                    const postId = undefined

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })
                it('should fail on non-number postId (null)', () => {
                    const postId = null

                    expect(() => logic.addLike(postId))
                        .to.throw(Error, `${postId} is not a number`)
                })




                afterEach(() => logic.logout())
            })

        })


    })

true && describe('retrieveUser', () => {
        describe('with existing user', () => {
            let username, password, text, postId

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })


            it('should sucessfully retrieve name of required user', () =>
                logic.retriveUser(logic._userId)
                    .then(user => expect(user).to.equal(username))

            )
            it('should fail on non-string name (number)', () => {
                const name = 6656537
                expect(() => logic.retriveUser(name))
                    .to.throw(Error, `${name} is not a string`)
            })
            it('should fail on non-string name (Array)', () => {
                const name = []

                expect(() => logic.retriveUser(name))
                    .to.throw(Error, ` is not a string`)
            })
            it('should fail on non-string name (object)', () => {
                const name = {}

                expect(() => logic.retriveUser(name))
                    .to.throw(Error, `[object Object] is not a string`)
            })
            it('should fail on non-string name (boolean)', () => {
                const name = true

                expect(() => logic.retriveUser(name))
                    .to.throw(Error, `${name} is not a string`)
            })
            it('should fail on non-string name (undefined)', () => {
                const name = undefined

                expect(() => logic.retriveUser(name))
                    .to.throw(Error, `${name} is not a string`)
            })
            it('should fail on non-string name (null)', () => {
                const name = null

                expect(() => logic.retriveUser(name))
                    .to.throw(Error, `${name} is not a string`)
            })


            afterEach(() => logic.logout())
        })



    })

true && describe('search user by name', () => {
        describe('with existing user', () => {
            let username, password, text, postId

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })


            it('should sucessfully search for correct user', () => {
                debugger
                return logic.searchUserByName(username)
                    .then(user => {
                        debugger
                        expect(user.app).to.equal(logic._app)
                        expect(user.comment).to.equal(undefined)
                        expect(user.id).to.equal(logic._userId)
                        expect(user.likes).to.equal(undefined)
                        expect(user.name).to.equal('John')
                        expect(user.posts).to.equal(undefined)
                        expect(user.profilePublic).to.equal(true)
                        expect(user.surname).to.equal('Doe')

                    })

            })
            it('should fail on non-string name (number)', () => {
                const username = 6656537
                try {
                    logic.searchUserByName(username)
                } catch (err) {
                    expect(err.message).to.equal(`${username} is not a string`)
                }

            })
            it('should fail on non-string name (Array)', () => {
                const username = []

                expect(() => logic.retriveUser(username))
                    .to.throw(Error, ` is not a string`)
            })
            it('should fail on non-string username (object)', () => {
                const username = {}

                expect(() => logic.retriveUser(username))
                    .to.throw(Error, `[object Object] is not a string`)
            })
            it('should fail on non-string username (boolean)', () => {
                const username = true

                expect(() => logic.retriveUser(username))
                    .to.throw(Error, `${username} is not a string`)
            })
            it('should fail on non-string username (undefined)', () => {
                const username = undefined

                expect(() => logic.retriveUser(username))
                    .to.throw(Error, `${username} is not a string`)
            })
            it('should fail on non-string username (null)', () => {
                const username = null

                expect(() => logic.retriveUser(username))
                    .to.throw(Error, `${username} is not a string`)
            })

            afterEach(() => logic.logout())


        })

    })

true && describe('listOtherPosts() listing posts from other user', () => {
        describe('with existing user', () => {
            let username, password, text, user

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() =>
                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => logic.listPosts())
                        .then(posts => postId = posts[0].id)
                )

                describe('with user sucessfully searched', () => {
                    beforeEach(() => {

                        debugger
                        return logic.searchUserByName(username)
                            .then(object => user = object)
                    })

                    it('should sucessfully return posts from searched user', () => {
                        debugger
                        let posts = logic.listOtherPosts(user)
                        expect(posts.length).to.equal(1)

                    })

                    it('should fail on non-object user (string)', () => {
                        const user = 'holacaracola'

                        expect(() => logic.listOtherPosts(user))
                            .to.throw(Error, `${user} is not an object`)
                    })
                    it('should fail on non-number user (Array)', () => {
                        const user = []

                        expect(() => logic.listOtherPosts(user))
                            .to.throw(Error, ` is not an object`)
                    })

                    it('should fail on non-number user (boolean)', () => {
                        const user = true

                        expect(() => logic.listOtherPosts(user))
                            .to.throw(Error, `${user} is not an object`)
                    })
                    it('should fail on non-number user (undefined)', () => {
                        const user = undefined

                        expect(() => logic.listOtherPosts(user))
                            .to.throw(Error, `${user} is not an object`)
                    })
                    it('should fail on non-number user (null)', () => {
                        const user = null

                        expect(() => logic.listOtherPosts(user))
                            .to.throw(Error, `${user} is not an object`)
                    })




                    afterEach(() => logic.logout())
                })

            })
        })

    })


true && describe('retrieveProfile()', () => {
        describe('with existing user', () => {
            let username, password, text, user

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() =>
                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => logic.listPosts())
                        .then(posts => postId = posts[0].id)
                )

                it('should sucessfully retrieve profile from logged-in user', () => {

                    return logic.retrieveProfile()
                        .then(user => {
                            expect(user.name).to.equal('John')
                            expect(user.surname).to.equal('Doe')
                            expect(user.username).to.equal(username)
                            expect(user.profilePublic).to.be.true
                            expect(user.posts).not.to.be.undefined

                        })

                })





                afterEach(() => logic.logout())


            })
        })

    })

true && describe('listLikes()', () => {
        describe('with existing user', () => {
            let username, password, text, user, postId

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {

                beforeEach(() =>

                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => logic.listPosts())
                        .then(posts => postId = posts[0].id)

                )




                it('should successfully find liked post', () =>

                    logic.addLike(postId)
                        .then(() => logic.listLikes())
                        .then(postsLiked => expect(postsLiked.length).to.equal(1))

                    //.then(expect(logic._likes[logic._likes.length - 1]).to.equal(postId))
                    //.then(() => logic.retrievePosts(postId))
                    //.then(like => expect(like).not.to.be.undefined)

                )





                afterEach(() => logic.logout())


            })
        })

    })

true && describe('retrievePosts()', () => {
        describe('with existing user', () => {
            let username, password, text, user, postId

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {

                beforeEach(() =>

                    logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text)
                        .then(() => logic.listPosts())
                        .then(posts => postId = posts[0].id)

                )
                it('should successfully retrieve liked post', () =>

                    logic.addLike(postId)
                        .then(() => logic.listLikes())
                        .then(postsLiked => logic.retrievePosts(postsLiked).then(postLiked => expect(postLiked.length).to.equal(1)))

                )
                afterEach(() => logic.logout())
            })
        })

    })

true && describe('add comment', () => {
        describe('with existing user', () => {
            let username, password, text

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() => logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text))
                debugger
                it('should sucessfully add a comment to created post', () => {

                    return logic.listPosts()
                        .then(posts => logic.addComment(posts[0].id, text).then(expect(logic._comments[0].content).to.equal(text))
                            //expect(posts[0].id).not.to.be.undefined 


                        )
                }
                )
            })

            afterEach(() => logic.logout())
        })
    })

true && describe('list comments', () => {
        describe('with existing user', () => {
            let username, password, text

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() => logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text))
                debugger
                it('should sucessfully list added comment', () => {

                    return logic.listPosts()
                        .then(posts => logic.addComment(posts[0].id, text).then(() => logic.listComments()
                            .then(comments => expect(comments).not.to.be.undefined))
                            //expect(posts[0].id).not.to.be.undefined 


                        )
                }
                )
            })

            afterEach(() => logic.logout())
        })
    })



true && describe('commentsPost', () => {
        describe('with existing user', () => {
            let username, password, text

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() => logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text))
                debugger
                it('should sucessfully count comments on a liked post', () => {

                    return logic.listPosts()
                        .then(posts => logic.addComment(posts[0].id, text).then(() => logic.commentsPost(posts[0].id).then(likes => expect(likes).to.equal(1)))



                        )
                }
                )
            })

            afterEach(() => logic.logout())
        })
    })

true && describe('retrieve comments', () => {
        describe('with existing user', () => {
            let username, password, text

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() => logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text))
                debugger
                it('should sucessfully retrieve commented post', () => {

                    return logic.listPosts()
                        .then(posts => logic.addComment(posts[0].id, text).then(() => logic.retrieveComments(posts[0].id).then(comments => expect(comments.length).to.equal(1)))



                        )
                }
                )
            })

            afterEach(() => logic.logout())
        })
    })

    true && describe('retrieve user comment', () => {
        describe('with existing user', () => {
            let username, password, text

            beforeEach(() => {
                const name = 'John', surname = 'Doe'

                username = `jd-${Math.random()}`
                password = `123-${Math.random()}`

                text = `hello ${Math.random()}`

                return logic.registerUser(name, surname, username, password)
                    .then(() => logic.login(username, password))
            })

            describe('with existing post', () => {
                beforeEach(() => logic.createPost("https://res.cloudinary.com/skylabcoders/image/upload/v1540308747/skylabcoders/a3kz5hstqqqgkiaisi1t.jpg", text))
                debugger
                it('should sucessfully retrieve user comment given commentId', () => {

                    return logic.listPosts()
                        .then(posts => logic.addComment(posts[0].id, text).then(() => logic.retrieveUserComment(logic._comments[0].postId).then(comments => expect(comments).to.be.a('string')))//.then(comments => expect(comments.length).to.equal(1)))
                        )


                        
                }
                )
            })

            afterEach(() => logic.logout())
        })
    })

})