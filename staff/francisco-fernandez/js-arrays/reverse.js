function reverse (arr){

    if (!(arr instanceof Array)) throw Error (arr+' is not an array');

    if (!arr.length) throw Error ('the array is empty');


    var arraytemp=[];
    for(var i = 0; i<arr.length; i++){
        arraytemp[i]=arr[i];
    }
    for(var i = 0; i<arr.length ; i++){
        arr[i]=arraytemp[arr.length-1-i];
    }
}