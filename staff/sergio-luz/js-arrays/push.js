function push() {
    if( !(arguments[0] instanceof Array)) throw Error('array is not valid');
    if(typeof arguments[1]==='undefined')  throw Error('element not defined');

    var count = 0;
    for (var i = 1; i < arguments.length; i++) {
        arguments[0][arguments[0].length + count] = arguments[i];
        count++;
    }
    return arguments[0].length;
}