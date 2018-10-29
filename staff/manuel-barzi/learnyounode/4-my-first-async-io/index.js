debugger

const fs = require('fs')

const [, , file] = process.argv

fs.readFile(file, 'utf8', (err, text) => {
    debugger

    if (err) throw err

    const count = text.match(/[^\n]*\n[^\n]*/gi).length
    
    console.log(count)
})