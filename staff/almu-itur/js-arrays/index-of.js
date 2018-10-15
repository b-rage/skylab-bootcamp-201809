function indexof(arr, elem) {
    
    if (arr == undefined) throw Error ('undefined is not an array!');
    if (!(arr instanceof Array)) throw Error ('first parameter should be an array!');
    if (!arr.length) throw Error ('one argument is empty');

    var index = -1;

    for (index=0; index<arr.length; index++) {
        if (arr[index]===elem) {
            return index;
        }
    }
}