require('dotenv').config()
const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser')
const logic = require('./logic')
const package = require('./package.json')

const { argv: [, , port = process.env.PORT || 8080] } = process

const app = express()

app.use(express.static('./public'))
app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const mySession = session({
    secret: 'my super secret',
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
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
    const { userId, postitId, error } = req.session

    if (userId) {
        try {
            logic.retrieveUser(userId)
                .then(({ name, postits }) => res.render('home', { name, postits, postitId, error }))
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

app.get('/logout', (req, res) => {
    req.session.userId = null

    res.redirect('/')
})

app.post('/postits', formBodyParser, (req, res) => {
    const { operation } = req.body

    try {
        switch (operation) {
            case 'add':
                const { text } = req.body

                logic.addPostit(req.session.userId, text)
                    .then(() => res.redirect('/home'))
                    .catch(({ message }) => {
                        req.session.error = message

                        res.redirect('/home')
                    })

                break
            case 'remove':
                const { postitId } = req.body

                logic.removePostit(req.session.userId, Number(postitId))
                    .then(() => res.redirect('/home'))
                    .catch(({ message }) => {
                        req.session.error = message

                        res.redirect('/home')
                    })
                break
            case 'edit':
                {
                    const { postitId } = req.body

                    req.session.postitId = postitId
                }
                
                res.redirect('/home')
                break
            default:
                res.redirect('/home')
        }
    } catch ({ message }) {
        req.session.error = message

        res.redirect('/home')
    }
})

app.listen(port, () => console.log(`Server ${package.version} up and running on port ${port}`))