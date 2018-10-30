const net = require('net')

const { argv: [, , port] } = process

const server = net.createServer(socket => {
    const date = new Date()

    const year = date.getFullYear(),
        month = date.getMonth() + 1,     // starts at 0  
        day = date.getDate(),      // returns the day of month  
        hours = date.getHours(),
        mins = date.getMinutes()

    // expected format YYYY-MM-DD hh:mm

    const formattedDate = `${year}-${digits(month)}-${digits(day)} ${digits(hours)}:${digits(mins)}\n`

    socket.end(formattedDate)
})

function digits(num) {
    return num < 10 ? `0${num}` : `${num}`
}

server.listen(port)

// $ nc localhost 8080