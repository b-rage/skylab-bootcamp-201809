function push(arr, elem) {
    if(!(arr instanceof Array)) throw Error ('array is not valid');
    if(!arr.length) throw Error ('array cannot be empty')
    if(!elem) throw Error ('element not defined');

    if(elem[0] !== undefined && typeof elem !== 'string'){
        for(var i=0; i<elem.length; i++){
            arr[arr.length++] = elem[i];
        }
    }else{
        arr[arr.length++] = elem;
    }
    return arr.length;
}