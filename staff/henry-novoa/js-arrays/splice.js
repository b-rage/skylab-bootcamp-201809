//splice.js
//implement a function that works as Array.prototype.splice

function splice(arr, start, count) {
   var result= [];
   var resultIndex = 0;
   var length = arr.length;
   for(var i = start;i< start + count;i++  ){
    result[resultIndex]=arr[start];
    resultIndex++;
    for (var j= start;j<length;j++){
       arr[j] = arr[j+1]; 
    }
    arr.length = arr.length -1 ;
   }
   arr.length = arr.length -1;
   return result;
}
//the function should work as follows:

