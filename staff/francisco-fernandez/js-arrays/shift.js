function shift(arr){

    if(!(arr instanceof Array)) throw Error ('input is not array');

    if(!arr.length) throw Error ('array is empty');

    if(arr[0]==='') throw Error ('first element of array is empty');


    var temp=arr[0];
    for(var i = 0; i < arr.length; i++){
        arr[i]=arr[i+1];
    }
    if(arr.length>0){arr.length=arr.length-1;}    
    return temp;
}