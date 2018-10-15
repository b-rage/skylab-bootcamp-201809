function every (arr, callback) {
    if(!(callback instanceof Function)&&!(arr instanceof Array))throw Error('arr is not an array and callback is not a function');
    if(!(callback instanceof Function))throw Error('callback is not a function');
    if(!(arr instanceof Array))throw Error('arr is not an array');
   var counter=0;
   for(var i = 0; i < arr.length ; i++){
       if (callback(arr[i])===true){
           counter++;
       }
   }
   if(counter===arr.length){
       return true;
   }
   return false;
} 

