const fs = require('fs')
const path = require('path')

/* let buf= fs.readdir(process.argv[2], function(err,list) {
    if (err) return console.log(err)
    let res = list.filter(item => {
        item.match('.txt')
    })
     console.log(res);
       
}) */

const [,,dir,ext] = process.argv

fs.readdir(dir, (err, files) => {
    if(err) throw err

    files.forEach(file => {
        if(path.extname(file) === `.${ext}`) console.log(file);
        
    })
})

