function join(arr,item){
    if (!(arr instanceof Array)) throw Error('array is not valid');
    if (!arr.length) throw Error ('array is empty');
    if (item == undefined){
        item = "";
    }
    var res=arr[0]+item;
    for(i=1; i<arr.length-1; i++){
        res+=arr[i]+item;
    }
    res+=arr[arr.length-1];

    return res;
}