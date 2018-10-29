debugger

const arg = process.argv.slice(2)

const res = arg.reduce((accum, val) => accum + Number(val), 0)

console.log(res)