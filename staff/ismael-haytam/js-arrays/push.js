/**
 * 
 * @param {Array} arr 
 * @param {*} elem 
 */

function push(arr, elem) {

    // Validation
    if (!(arr instanceof Array)) throw Error('array is not valid'); 
    if (!elem) throw Error('element not defined'); 
    
    // logic
    (arr[arr.length] = elem) && arr;
}