var path = require('path')
var fs = require('fs')

const {argv: [,,recu, from, to]} = process

if (recu === '-R') {
    var recursive = function(from, to) {
        
        if(fs.lstatSync(from).isDirectory()){

            fs.mkdirSync(to)

            fs.readdirSync(from).forEach((file) => {
            recursive(path.join(from, file),
                                path.join(to, file))
            })
        } else fs.createReadStream(from).pipe(fs.createWriteStream(to))
    }

    recursive(from, to)

}else fs.createReadStream(recu).pipe(fs.createWriteStream(from))