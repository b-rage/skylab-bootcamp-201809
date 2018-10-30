const http = require('http')

const { argv: [, , ...urls] } = process

const contents = []
let count = 0

urls.forEach((url, index) => {
    http.get(url, res => {
        res.setEncoding('utf8')

        let content = ''

        res.on('data', chunk => content += chunk)

        res.on('end', () => {
            contents[index] = content

            count++

            if (count === urls.length)
                contents.forEach(content => console.log(content))
        })
    })
})
