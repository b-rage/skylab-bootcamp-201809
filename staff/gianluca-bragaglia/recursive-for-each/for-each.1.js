let index = 0

function forEach(array, callback) {
    if (index < array.length) {
        callback(array[index], index)

        index++

        forEach(array, callback)
    } else index = 0
}

module.exports = forEach