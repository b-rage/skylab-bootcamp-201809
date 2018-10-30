const http = require('http')
const bl = require('bl')

function httpGet(url) {
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            res.pipe(bl((err, data) => {
                if (err) return reject(err)

                resolve(data.toString())
            }))
        })
    })
}

module.exports = httpGet