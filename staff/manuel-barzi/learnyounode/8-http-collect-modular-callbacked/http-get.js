const http = require('http')
const bl = require('bl')

function httpGet(url, callback) {
    http.get(url, res => {
        res.pipe(bl((err, data) => {
            if (err) return callback(err)
        
            callback(null, data.toString())
        }))
    })
}

module.exports = httpGet