function filter (arr,f){
    if(!(arr instanceof Array))throw Error ('first element is not an array');
    if(!(f instanceof Function))throw Error('second element is not an function');
    var newArray = [];
   var j = 0;
   for(var i = 0; i<arr.length; i++){
       if(f(arr[i])===true){
           newArray[j]=arr[i];
           j++;
       }
   }
   return newArray;
} 