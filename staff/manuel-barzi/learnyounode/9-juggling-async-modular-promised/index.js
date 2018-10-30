const httpGet = require('./http-get')

const { argv: [, , ...urls] } = process

const promises = urls.map(url => httpGet(url))

Promise.all(promises)
    .then(results => results.forEach(result => console.log(result)))

// $ node . http://google.es http://google.fr http://google.it http://google.co.uk http://google.com