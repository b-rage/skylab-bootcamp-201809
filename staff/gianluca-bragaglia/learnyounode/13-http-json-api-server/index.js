const http = require('http')
const url = require('url')

const { argv: [, , port] } = process

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const parsed = url.parse(req.url, true)

        if (parsed.pathname === '/api/parsetime') { // sample url http://localhost:8080/api/parsetime?iso=2013-08-10T12:10:37
            const date = new Date(parsed.query.iso)

            const data = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }

            res.writeHead(200, { 'Content-type': 'application/json' })

            res.end(JSON.stringify(data))
        } else if(parsed.pathname === '/api/unixtime') { // sample url localhost:8080/api/unixtime?iso=2013-08-10T12:10:37
            const date = new Date(parsed.query.iso)

            const data = { unixtime: date.getTime() }

            res.writeHead(200, { 'Content-type': 'application/json' })

            res.end(JSON.stringify(data))
        }
    } else res.end('not valid method')
})

server.listen(port)