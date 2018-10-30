const fs = require('fs');
 
const [,, orig, dest] = process.argv

fs.readFile(orig, (err, content) => {
    if (err) throw err

    fs.writeFile(dest, content, err => {
        if (err) throw err
    })
})
