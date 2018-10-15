function includes(arr, search, pos){
    if (!(arr instanceof Array)) throw Error('array is not valid');
    if ( typeof search === 'undefined') throw Error('element is not defined');
    if(arr.length == 0) throw Error('array is empty');

    var e = false;
    var i;
    for(i=0; i<arr.length; i++){
        if(arr[i]===search){
            e=true;
            if (pos !== undefined){
                if (pos<=i){
                    e=false;
                }
            }
            break;
        }
    }
    return e;
}