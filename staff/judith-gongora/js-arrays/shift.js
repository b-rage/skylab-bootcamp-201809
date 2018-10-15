function shift (arr){
    if (!(arr instanceof Array)) throw Error ('input is not array');
    if (typeof arr == 'undefined') throw Error ('no parameter has been introduced');
    // if (!arr.length) throw Error ('array is empty'); //REDUNDANTE, ya se comprueba con instanceof


    if (arr.length==0){
        first='undefined'
    }else{
        var array=[]
        for (i=0;i<arr.length-1;i++){
            array[i]=arr[i+1];
        }
        var first= arr[0]
        arr.length--;
        for (i=0;i<arr.length;i++){
            arr[i]=array[i];
        }
    }  
    return first;
}