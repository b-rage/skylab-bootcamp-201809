const filterFilesByExtension = require('./filter-files-by-extension')

const [, , dir, ext] = process.argv

filterFilesByExtension(dir, ext, (err, files) => {
    if (err) throw err

    files.forEach(file => console.log(file))
})

