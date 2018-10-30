const fs = require('fs')

const [, , orig, dest] = process.argv

printMem()

fs.readFile(orig, (err, content) => {
    if (err) throw err

    printMem()

    fs.writeFile(dest, content, err => {
        if (err) throw err
    })
})

function printMem() {
    console.log(process.memoryUsage().rss / 1024 / 1024)
}