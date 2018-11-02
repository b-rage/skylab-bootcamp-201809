const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const { argv: [, , port] } = process

const app = express()

app.use(cookieParser())
app.use(session({secret: 'shhh its a secret'}))

let users = []

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>home</title>
    </head>
    <body>
        <h1>Home</h1>
        <a href="/login">Login</a> or <a href="/register">Register</a>
    </body>
</html>`)
})

app.get('/login', (req, res) => {
    
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
    </head>
    <body>
        <h1>login</h1>
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button type="submit">Login</button>
        </form>
        <a href="/">go back</a>
    </body>
</html>`)
})

app.get('/register', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>register...!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <form action="/register" method="POST">
            <input type="text" name="name" placeholder="Name">
            <input type="text" name="surname" placeholder="Surname">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button type="submit">Register</button>
        </form>
        <a href="/">go back</a>
    </body>
</html>`)
})

app.post('/register', (req, res) => {
    let data = ''

    req.on('data', chunk => data += chunk)

    req.on('end', () => {
        const keyValues = data.split('&')

        const user = { id: Date.now() }

        keyValues.forEach(keyValue => {
            const [key, value] = keyValue.split('=')

            user[key] = value
        })

        let duplicated = false

        if(req.session.users && req.session.users.length>0 ) {
            req.session.users.forEach(u => {
                if( u.username === user.username) {
                   
                   duplicated = true
                }
            })
        }
        

        users.push(user)

        req.session.users = users

        if(req.session.users) {

            if(duplicated) {
                res.send(`<!DOCTYPE html>
                <html>
                    <head>
                        <title>register...!</title>
                    </head>
                    <body>
                        <p>User already exist</p>
                        <a href="/login">go to login</a>
                    </body>
                </html>`)
            }else {
                res.redirect('/login')
            }

        }
    })
})



app.post('/login', (req, res) => {
    let data = ''

    req.on('data', chunk => data += chunk)

    req.on('end', () => {
        const keyValues = data.split('&')

        const user = {  }

        keyValues.forEach(keyValue => {
            const [key, value] = keyValue.split('=')

            user[key] = value
        })
        
        let findUser = req.session.users.filter(u => user.username === u.username)

        
        if(findUser[0] && findUser[0].password === user.password) {
            req.session.authenticatedUser = findUser[0]
            res.redirect('/landing')
        }
   
    
    })
})


app.get('/landing', (req, res) => {
    if(req.session.authenticatedUser) {
        res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>Landing</title>
    </head>
    <body>
        <h1>Welcome ${req.session.authenticatedUser.name}</h1>
        <a href="/logout">logout</a>
    </body>
</html>`)
    }else{
        res.redirect('/')
    }
    
    
})

app.get('/logout', (req, res) => {
    req.session.authenticatedUser = null
    res.redirect('/')
       
})

app.listen(port || 3000)