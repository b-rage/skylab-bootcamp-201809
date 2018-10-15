
function isArray(arr) {
    return arr instanceof Array;
}

// Another possible solution...

/*

function isArray(arr) {
    try {
        arr.push('is-array');
        return true;
    } catch (error) {
        return false;
    }
}

*/
