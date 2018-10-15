function find (arr,callback){

    //if (!(arr instanceof Array)) throw Error ("Arr is not a array");

    //if (!arr.length) throw Error ("Arr is empty");

    //if (typeof callback !== "function") throw Error ("Callback isn't a function");

    for(var i = 0; i<arr.length; i++){
        if(callback(arr[i])===true){
            return arr[i];
        }
    }
}