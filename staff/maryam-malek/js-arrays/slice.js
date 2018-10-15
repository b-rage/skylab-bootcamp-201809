function slice(arr, begin, end) {
    if(!(arr instanceof Array)) throw Error ('array is not valid');
    if(!arr.length) throw Error ('array is not valid')
    if(typeof begin !== 'number') throw Error ('start is not valid');
    if(typeof end !== 'number' && typeof end !== 'undefined') throw Error ('end is not valid');

    var newArr = [];
    var beg = begin;
    if(end && begin){
        for (var i=0; i<(end-beg); i++){
            newArr[i] = arr[begin];
            begin++;
        }
    }else if (begin){
        for (var i=0; i<(arr.length-beg); i++){
            newArr[i] = arr[begin];
            begin++;
        }
    }else{
       for (var i=0; i<(arr.length-beg); i++){
            newArr[i] = arr[i];
       }
    }
    return newArr;
}