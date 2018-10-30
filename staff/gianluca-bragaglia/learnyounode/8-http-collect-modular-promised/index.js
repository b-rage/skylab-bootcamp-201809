const httpGet = require('./http-get')

const { argv: [, , url] } = process

httpGet(url)
    .then(content => console.log(`${content.length}\n${content}`))