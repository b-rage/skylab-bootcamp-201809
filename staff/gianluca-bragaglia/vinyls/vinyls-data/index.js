const mongoose = require('mongoose')

const { User, Chat, Comment, Vinyl } = require('./schemas')

module.exports = {
    mongoose,
    models: {
        User: mongoose.model('User', User),
        Chat: mongoose.model('Chat', Chat),
        Comment: mongoose.model('Comment', Comment),
        Vinyl: mongoose.model('Vinyl', Vinyl)
        
    }
}
