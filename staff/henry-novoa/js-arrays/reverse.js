
//implement a function that works as Array.prototype.reverse

// reverse.js

function reverse(arr) {
  var result = [];
  var j =0;
  for(var i = arr.length; i>=0 ; i--){
   
    result[j] = arr[i-1];
    j++;
  }  
  for(var i = 0; i<arr.length;i++){
      arr[i] = result[i];
  }

 return arr;
  
}


