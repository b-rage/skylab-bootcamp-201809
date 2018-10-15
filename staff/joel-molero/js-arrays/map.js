function map(arr, callback) {
  a=[];
    for(x=0;x<arr.length;x++){
		a[x] = callback(arr[x]);
    } return a;
};