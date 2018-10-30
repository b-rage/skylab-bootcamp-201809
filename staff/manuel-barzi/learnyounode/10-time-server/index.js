const net = require('net')

const { argv: [, , port] } = process

const server = net.createServer(socket => {
    const date = 'hola mundo\n'

    socket.write(date)
    socket.write('hello world\n')
    socket.write('...\n')
})

server.listen(port)