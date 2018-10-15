function join(arr, separator) {
    if (!(arr instanceof Array)) throw Error (arr + ' is not an array');

    var str = '';
    if(!arr.length) return str; 

    if(typeof separator !== 'undefined'){
        for(i=0; i<arr.length-1; i++){
            str += arr[i] + separator;
        }
        str += arr[arr.length-1]
    }else{
        for(i=0; i<arr.length-1; i++){
            str += arr[i] + ',';
        }
        str += arr[arr.length-1]
    }
return str;
}
