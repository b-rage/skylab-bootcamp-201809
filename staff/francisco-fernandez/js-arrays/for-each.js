function forEach(arr, callback) {

    if (!(arr instanceof Array)) throw Error ('array is not valid');

    for(var i=0; i<arr.length ; i++) {
        callback(arr[i], i, arr);
    }
}

   //if (typeof callback!="function") throw Error('callback is not a function');

    //if (!arr.length && !f.length) throw Error('array is not valid');

    //if (typeof arr==='undefined' && typeof callback==='undefined') throw Error('array and function are empty');

    //if (typeof arr==='undefined') throw Error('array is not valid');

