const http = require('http')
const after = require('after')

const { argv: [, , ...urls] } = process

const contents = []

const next = after(urls.length, (err, results) => {
    if (err) throw err

    results.forEach(result => console.log(result))
})

urls.forEach((url, index) => {
    http.get(url, res => {
        res.setEncoding('utf8')

        let content = ''

        res.on('data', chunk => content += chunk)

        res.on('end', () => {
            contents[index] = content

            next(undefined, contents)
        })
    })
})
