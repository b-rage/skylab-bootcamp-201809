const http = require('http')

const [, , url] = process.argv

// http.get(url, res => res.on('data', chunk => console.log(chunk.toString())))

http.get(url, res => {
    res.setEncoding('utf8')

    res.on('data', chunk => console.log(chunk))
})