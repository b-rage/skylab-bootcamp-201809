function push(){
    // Validation
    if (!(arguments[0] instanceof Array)) throw Error('array is not valid'); 
    if (!arguments[1]) throw Error('element not defined'); 
    
    for(i=1;i<arguments.length;i++){
        arr[arr.length]= arguments[i];
    }
    return arr;

}