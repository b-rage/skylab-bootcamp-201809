const fs = require('fs')

const [, , orig, dest] = process.argv

printMem()

const rs = fs.createReadStream(orig)

const ws = fs.createWriteStream(dest)

rs.pipe(ws)

rs.on('end', () => printMem())

function printMem() {
    console.log(process.memoryUsage().rss / 1024 / 1024)
}