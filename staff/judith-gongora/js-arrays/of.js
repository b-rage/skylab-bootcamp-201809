function of(){
    if (!arguments.length) throw Error('elements is empty');
    
    arr=[];
    for (i=0; i<arguments.length;i++){
        arr[i]=arguments[i];
    }
    return arr;
}