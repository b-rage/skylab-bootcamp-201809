require('dotenv').config()
const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser')
const logic = require('./logic')
const package = require('./package.json')
const override = require('express-method-override')


const { argv: [, , port = process.env.PORT || 8080] } = process

const app = express()

app.use(express.static('./public'))
app.set('view engine', 'pug')
app.use(override("_method"))

const formBodyParser = bodyParser.urlencoded({ extended: false })

const mySession = session({
    secret: 'my super secret',
    cookie: { maxAge: 60 * 60 * 24 },
    resave: true,
    saveUninitialized: true,
    store: new FileStore({
        path: './.sessions'
    })
})

app.use(mySession)

app.get('/', (req, res) => {
    req.session.error = null

    res.render('landing')
})

app.get('/register', (req, res) => {
    res.render('register', { error: req.session.error })
})

app.post('/register', formBodyParser, (req, res) => {
    const { name, surname, username, password } = req.body

    try {
        logic.registerUser(name, surname, username, password)
            .then(() => {
                req.session.error = null

                res.render('register-confirm', { name })
            })
            .catch(({ message }) => {
                req.session.error = message

                res.redirect('/register')
            })
    } catch ({ message }) {
        error = message

        res.redirect('/register')
    }
})

app.get('/login', (req, res) => {
    res.render('login', { error: req.session.error })
})

app.post('/login', formBodyParser, (req, res) => {
    const { username, password } = req.body

    try {
        logic.authenticateUser(username, password)
            .then(id => {
                req.session.userId = id

                req.session.error = null

                res.redirect('/home')
            })
            .catch(({ message }) => {
                req.session.error = message

                res.redirect('/login')
            })
    } catch ({ message }) {
        error = message

        res.redirect('/login')
    }
})

app.get('/home', (req, res) => {
    const id = req.session.userId
   
    if (id) {
        try {
            logic.retrieveUser(id)
                .then(({ name }) => res.render('home', { name }))
                .catch(({ message }) => {
                    req.session.error = message

                    res.redirect('/')
                })
        } catch ({ message }) {
            req.session.error = message

            res.redirect('/')
        }
    } else res.redirect('/')
})



app.get('/postits', (req, res) => {
    const id = req.session.userId

    if (id) {
        try {
            logic.retrieveUser(id)
                .then(user => {
                    res.render('postits', { error: req.session.error, user: user, postits: user.postits })
                })
                .catch(({ message }) => {
                    req.session.error = message
                    res.redirect('/')
                })
        } catch ({ message }) {
            req.session.error = message

            res.redirect('/')
        }

    } else res.redirect('/')
})

app.post('/postits', formBodyParser, (req, res) => {
    const { body, type, postitId } = req.body

    const userId = req.session.userId
    switch (type) {
        case 'create':
            try {
                logic.savePostit(userId, body)
                    .then(() => {
                        res.redirect('/postits')
                    })
                    .catch(({ message }) => {
                        req.session.error = message
                        res.redirect('/postits')
                    })

            } catch ({ message }) {

                req.session.error = message

                res.redirect('/postits')
            }
            break
        case 'delete':
            try {
                logic.deletePostit(userId, Number(postitId))
                    .then(() => {
                        res.redirect('/postits')
                    })
                    .catch(({ message }) => {
                        req.session.error = message
                        res.redirect('/postits')
                    })

            } catch ({ message }) {
                req.session.error = message

                res.redirect('/postits')
            }
            break
        case 'update':
            try {
                logic.updatePostit(userId, Number(postitId), body)
                    .then(() => {
                        res.redirect('/postits')
                    })
                    .catch(({ message }) => {
                        req.session.error = message
                        res.redirect('/postits')
                    })

            } catch ({ message }) {

                req.session.error = message

                res.redirect('/postits')
            }
            break
    }
})

app.get('/deletePostit:id', (req, res) => {
    const { postitId } = req.params.id

    const userId = req.session.userId

    try {
        logic.deletePostit(userId, postitId)
            .then(() => {
                res.redirect('/postits')
            })
            .catch(({ message }) => {
                req.session.error = message
                res.redirect('/postits')
            })

    } catch ({ message }) {

        req.session.error = message

        res.redirect('/postits')
    }

})

app.get('/logout', (req, res) => {
    req.session.userId = null

    res.redirect('/')
})

app.listen(port, () => console.log(`Server ${package.version} up and running on port ${port}`))