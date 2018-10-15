var promise = new Promise((resolve, reject) => reject())

promise
    .then(() => console.log('hola mundo'))
    .then(() => console.log('hola mundo'))
    .then(() => console.log('hola mundo'))
    .catch(() => console.error('adios mundo cruel'))
    .then(() => console.log('hello world'))
    .then(() => { throw Error('forced error') })
    .then(() => console.log('ciao mondo'))
    .catch(() => console.error('oups'))
    .then(() => console.log('hello world'))
    .then(() => { throw Error('forced error') })
    .then(() => console.log('ciao mondo'))
    .catch(() => console.error('oups'))

//

var promise = new Promise((resolve, reject) => reject(1))

promise
    .then(n => { console.log(n); return ++n })
    .then(n => { console.log(n); return ++n })
    .then(n => { console.log(n); return ++n })
    .catch(n => { console.log(n); return ++n })
    .then(n => { console.log(n); throw 100; return ++n })
    .then(n => { console.log(n); return ++n })
    .catch(n => { console.log(n); return ++n; })
    .then(console.log)

//

var promise = new Promise((resolve, reject) => resolve(1))

promise
    .then(n => { console.log(n); return ++n })
    .then(n => { console.log(n); return ++n })
    .then(n => { console.log(n); return ++n })
    .catch(n => { console.log(n); return ++n })
    .then(n => { console.log(n); throw 100; return ++n })
    .then(n => { console.log(n); return ++n })
    .catch(n => { console.log(n); return ++n; })
    .then(console.log)