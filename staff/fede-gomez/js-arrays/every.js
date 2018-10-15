function every (array, callback) {
    var allTrue = true;
    for(let i=0; i<array.length; i++){
        if(!callback(array[i])){
            allTrue = false;
        }
    }
    return allTrue;
}