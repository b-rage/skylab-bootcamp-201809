function filter(arr, callback) {
    if(!(arr instanceof Array)) throw Error ('first element is not an array');
    if(typeof callback !== 'function') throw Error ('second element is not a function');
    if(!arr.length) throw Error ('the array passed as argument is empty')
    var newArr = [];
    var index = 0;
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            newArr[index] = arr[i];
            index++;
        }
    }
    return newArr;
}