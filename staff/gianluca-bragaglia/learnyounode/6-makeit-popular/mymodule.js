const fs = require('fs')
const path = require('path')


module.exports = function () {

    const [,,dir,ext] = process.argv
    
    fs.readdir(dir, (err, files) => {
        if(err) throw err
    
        files.forEach(file => {
            if(path.extname(file) === `.${ext}`) console.log(file)
            
        })
    })
}