const http = require('http')

const { argv: [, , port] } = process

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let content = ''

        req.on('data', chunk => content += chunk)   

        req.on('end', () => res.end(content.toUpperCase()))
    }
})

server.listen(port)