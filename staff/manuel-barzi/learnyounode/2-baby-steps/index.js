debugger

const argv = process.argv.slice(2)

let sum = 0;

//argv.forEach(num => sum += parseFloat(num))
argv.forEach(num => sum += Number(num))

console.log(sum)