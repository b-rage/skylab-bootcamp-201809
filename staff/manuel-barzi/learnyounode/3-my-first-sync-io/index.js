debugger

const fs = require('fs')

const [, , file] = process.argv

const text = fs.readFileSync(file, 'utf8')

const count = text.match(/[^\n]*\n[^\n]*/gi).length

console.log(count)