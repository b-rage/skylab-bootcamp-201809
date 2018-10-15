function join (arr, elem) {
	var joined = '';
    for(var i= 0; i<arr.length-1; i++) {
     joined += arr[i] + elem;
    }
	console.log(joined + arr[arr.length-1])
}

join([1,2,3], "-");