function forEach(arr, callback) {
  if (!(arr instanceof Array)) throw Error("array is not valid");  //cambiar para matchear manu's message

    for(var x=0;x<arr.length;x++){
		callback(arr[x], x, arr);     // meter "x" para result length?? ?????????!?!?!?!?!?
    }
};