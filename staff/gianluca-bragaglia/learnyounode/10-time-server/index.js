const net = require('net')
const strftime = require('strftime')

const { argv: [, , port] } = process

const server = net.createServer(socket => {
    const date = new Date()

    // expected format YYYY-MM-DD hh:mm

    const formattedDate = strftime('%F %H:%M\n', date)

    socket.end(formattedDate)
})

function digits(num) {
    return num < 10 ? `0${num}` : `${num}`
}

server.listen(port)

// $ nc localhost 8080