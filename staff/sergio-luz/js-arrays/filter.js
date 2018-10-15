function filter(arr, f) {
    if( !(arr instanceof Array)) throw Error('first element is not an array');
    if(!arr.length)    throw Error('the array passed as argument is empty');
    if(!(f instanceof Function)) throw Error('second element is not an function');

    var x, temp=[], count=0;
    for (var i = 0; i < arr.length; i++) {
        x = f(arr[i]);
        if (x == true) {
            temp[count]=arr[i];
            count++;
        }
    }
    return temp;
}