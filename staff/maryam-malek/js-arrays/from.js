function from(arr, callback) {
    if (!(arr instanceof Array) && typeof arr !== 'string') throw Error ('object is not iterable');
    var arra = arr;
    // if(arr instanceof Array){
    // arra.forEach(function(arr, i){
    //     if (!arr[i].length) throw Error ('empty value found in array');
    // });
    // }
    var newArr =[];
    if(callback){
        for(var i=0; i<arr.length; i++){
            newArr[i] = callback(arr[i], i);
        } 
    }else{
        for(var i=0; i<arr.length; i++){
            newArr[i] = arr[i];
        }
    }
    return newArr;
}