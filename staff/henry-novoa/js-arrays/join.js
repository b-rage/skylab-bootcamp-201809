//create a function that works as Array.prototype.join

// join.js

function join(arr, separator) {
    var result ="";
    if (!(arr instanceof Array)) throw Error("Invalid or unexpected token");
    if(separator === undefined){
        for(var i=0; i<arr.length -1; i++){
            result = result + arr[i] +  ",";
        }
        result = result + arr[i]
    
 
        
} else  if(!arr.length){

    return result;
    }    
 else{
    for(var i=0; i<arr.length -1; i++){
        result = result + arr[i] +  separator;
    }
    result = result + arr[i]

}
    return result;

}

