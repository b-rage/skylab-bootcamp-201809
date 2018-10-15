/*var arr = [5, 12, 8, 130, 44];

var res = findIndex(arr, function(num) { return num > 13; });

console.log(res); // 3*/


function findIndex (arr,callback){
    if(!(arr instanceof Array)) throw Error ('entered invalid array');

   if(!arr.length) throw Error ('entered empty array');

   if (typeof callback !== 'function') throw Error ('callback is not a function');


    for(var i = 0; i < arr.length; i++){
       if(f(arr[i],i,arr)===true){
           return i;
       }
   }

   return -1;
   
} 