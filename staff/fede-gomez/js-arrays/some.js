function some (array, callback) {

    var someTrue = false;
    for(let i=0; i<array.length; i++) {
        if(callback(array[i])){
            someTrue = true;
        }
    }
    return someTrue;
}