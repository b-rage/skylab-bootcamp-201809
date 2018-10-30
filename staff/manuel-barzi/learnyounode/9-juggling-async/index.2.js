const http = require('http')
const async = require('async')

const { argv: [, , ...urls] } = process

async.map(urls, (url, callback) => {
    http.get(url, res => {
        res.setEncoding('utf8')

        let content = ''

        res.on('data', chunk => content += chunk)

        res.on('end', () => {
            callback(undefined, content)
        })
    })
}, (err, results) => {
   if (err) throw err

    results.forEach(result => console.log(result))
})
