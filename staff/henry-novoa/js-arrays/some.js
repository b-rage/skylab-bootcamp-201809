

function some(arr, callback) {
    index= -1;
    var result = [];
    var resultIndex = 0;
    for(var i=0; i < arr.length; i++){
        if(callback(arr[i]) === true){
           return true;  
        }
       
    }
    return false;
    

}


