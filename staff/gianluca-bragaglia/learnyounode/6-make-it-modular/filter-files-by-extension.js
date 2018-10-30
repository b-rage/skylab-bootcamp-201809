const fs = require('fs')
const path = require('path')

function filterFilesByExtension(dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        // if (err) {
        //     callback(err)

        //     return
        // }
        
        if (err) return callback(err)
    
        const filtered = files.filter(file => path.extname(file) === `.${ext}`)

        callback(null, filtered)
    })
}

module.exports = filterFilesByExtension

