const http = require('http')

const { argv: [, , url] } = process

http.get(url, res => {
    res.setEncoding('utf8')

    let content = ''

    res.on('data', chunk => content += chunk)

    res.on('end', () => console.log(`${content.length}\n${content}`))
})

// console.log('block')

// const currentMillis = Date.now()

// while(Date.now() - currentMillis < 3000);

// console.log('continue...')