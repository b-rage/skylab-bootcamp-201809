function reverse(arr) {
    if(!(arr instanceof Array)) throw Error ('array is not valid');
    if(!arr.length) throw Error ('array is not valid')
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        newArr[i]=arr[i];
    }
    arrLength = arr.length-1;
    for(i=0; i<arr.length; i++){
        arr[i] = newArr[arrLength--];
    }    
}