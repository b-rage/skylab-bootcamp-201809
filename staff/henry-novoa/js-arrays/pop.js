//pop.js
//implement a function that works as Array.prototype.pop

// pop.js

function pop(arr) {

   if (!(arr instanceof Array)) throw Error("input is not an array");
   if(!arr.length) throw Error("array is empty");
   if(arguments.length > 1) throw Error("only one argument allowed")
   var result = 0;
   result = arr[arr.length - 1]
   arr.length = arr.length - 1;  
   return result;
}
