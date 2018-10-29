var fs = require('fs')

let buf= fs.readdir(process.argv[2], function(err,list) {
    if (err) return console.log(err)
    let res = list.filter(item => {
        item.match('.txt')
    })
     console.log(res);
       
})

