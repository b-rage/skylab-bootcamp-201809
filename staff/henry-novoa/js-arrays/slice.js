//slice.js
//implement a function that works as Array.prototype.slice

// slice.js

function slice(arr, begin, end) {
    var result = [];
    var resultIndex =0;
    if(arguments.length === 3){
    for(var i=begin;i < end;i++){
       
        result[resultIndex] = arr[i];
        resultIndex++;
      }
      
      return result;
}else{
    for(var i=begin; i < arr.length;i++){
        
        result[resultIndex] = arr[i];
        resultIndex++;

    }
    
    return result;
  }
}


