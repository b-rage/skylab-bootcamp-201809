const forEach = require('./for-each')

const nums = [1, 2, 3]

forEach(nums, (num, index) => console.log(index, num))

forEach([1, 2], (num, index) => console.log(index, num))

forEach([1, 2, 3, 4, 5], (num, index) => console.log(index, num))

