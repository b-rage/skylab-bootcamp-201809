// Yet to be finished...


function splice(array, start, deleteCount) {

    var elemsToBeAdded = arguments.length - 3;
    if (elemsToBeAdded === 0){
        if (deleteCount === undefined) {
            array.length = start;
        } else if (deleteCount === 0) {
            for (var i = 3; i < arguments.length; i++) {
                push(array, arguments[i]);
            }
        } else {
            for (var i = 3; i < arguments.length; i++) {
                push(array, arguments[i]);
        }
    }
  
    return array;
}
}
