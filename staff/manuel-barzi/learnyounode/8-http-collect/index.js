const http = require('http')
const bl = require('bl')

const { argv: [, , url] } = process

http.get(url, res => {
    res.pipe(bl((err, data) => {
        if (err) throw err

        // console.log(data.length)
        // console.log(data.toString())
        
        // console.log(data.length + '\n' + data)
        
        console.log(`${data.length}\n${data}`)
    }))
})