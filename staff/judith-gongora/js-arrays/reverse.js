function reverse(arr){
    if (typeof arr == 'symbol') throw Error ('the argument passed is a symbol should be an array');       
    if (typeof arr == 'boolean') throw Error ('the argument passed is a boolean should be an array');
    if (typeof arr == 'function') throw Error ('the argument passed is a function should be array');
    if (typeof arr == 'string') throw Error ('the argument passed is a string should be array');   
    if (!(arr instanceof Array)) throw Error ('the argument is not an array');
    if (!arr.length) throw Error ('the array is empty');

    var array=[];
    var e = 0;
    for(i=arr.length-1; i>=0; i--){
        array[e]=arr[i];
        e++;
    }
    for (i=0;i<arr.length;i++){
        arr[i]=array[i];
    }
}