function unshift(arr,item){
    if (!(arr instanceof Array)) throw Error('array is not valid'); 
    if (!item) throw Error('element not defined');
    
    var array=[];
    for(i=0;i<arr.length;i++){
        array[i]=arr[i];
    }

    arr.length = 0;
    
    for(var i = 1; i < arguments.length; i++) {
        arr[arr.length] = arguments[i];
    }
    
    for(var i = 0; i < array.length; i++) {
        arr[arr.length] = array[i];
    }

    return arr.length;
}