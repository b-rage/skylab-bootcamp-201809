// TODO ok, but it does not count indexes (neither pass it to callback)

function forEach(array, callback) {
    const copy = Array.from(array)

    if (!copy.length) return

    const first = copy.shift()

    callback(first)

    forEach(copy, callback)
}

module.exports = forEach