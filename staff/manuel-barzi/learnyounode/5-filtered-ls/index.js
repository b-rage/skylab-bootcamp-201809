const fs = require('fs')
const path = require('path')

const [, , dir, ext] = process.argv

fs.readdir(dir, (err, files) => {
    if (err) throw err

    files.forEach(file => {
        if (path.extname(file) === `.${ext}`) console.log(file)
    })
})

