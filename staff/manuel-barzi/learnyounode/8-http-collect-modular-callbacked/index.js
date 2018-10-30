const httpGet = require('./http-get')

const { argv: [, , url] } = process

httpGet(url, (err, content) => console.log(`${content.length}\n${content}`))