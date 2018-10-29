

const argv = process.argv.slice(2)


let total = 0

argv.map(n => {
total += Number(n)
})

console.log(total);


