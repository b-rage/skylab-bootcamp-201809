function indexof(arr, tag){
    if(typeof arr==='undefined') throw Error(typeof arr+' is not an array!');
    if( !(arguments[0] instanceof Array)) throw Error('first parameter should be an array!');
    if (!arr.length || !tag.length)  throw Error("one argument is empty");

    for (var i = 0; i < arr.length; i++) {
        if(arr[i]===tag){
            return i;
        }
    }
}