function push(arr,element){

    if (!(arr instanceof Array)) throw Error('array is not valid'); 
    if (!element) throw Error('element not defined'); 

    arr[arr.length]=element;
    return arr.length;
}
