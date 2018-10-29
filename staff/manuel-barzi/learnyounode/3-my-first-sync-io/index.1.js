const fs = require('fs')

const [, , file] = process.argv

const buf = fs.readFileSync(file)

const txt = buf.toString()

const lines = txt.split('\n')

console.log(lines.length - 1)