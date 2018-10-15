
//create a function that works as Array.prototype.from

// from.js

function from(arr, elem) {
    var result=[];
    if(arguments.length == 1) {
        for(var i = 0; i<arr.length ; i++){
            result[i] = arr[i];
            
        }
        return result;
    }
    else if(arguments.length == 2){
        for(var i = 0; i<arr.length ; i++){
            result[i]=elem(arr[i]);
           
        }
        return result;
    }
    else{
        return arr;
    }
}



