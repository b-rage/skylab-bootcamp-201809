function slice(arr, begin, end) {
    if (!(arr instanceof Array)) throw Error('array is not valid')
    if(begin === undefined && end === undefined) return arr;
    if (typeof begin !== 'number') throw Error('start is not valid')
    if (typeof end !== 'number') throw Error('end is not valid')
  
  
    var result = [], counter= 0;
    if(!begin && !end) return result;


    for (var i = (begin? begin: 0); i < (end? end: arr.length) ; i++){
        result[counter++] = arr[i];
    }
    return result;

    //slice with negative begin or end -- TO BE IMPLEMENTED
}

