function find(arr, callback){

    for(var i = 0; i < arr.length;i++){

        if(callback(arr[i]))
        {
            return arr[i];
        }
    }
    return undefined;

}