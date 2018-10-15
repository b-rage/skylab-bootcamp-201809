//sort.js

function sort(arr){
    var arr2 = [];
    var arr3 = [];
    var position = 0;
    var j = -1;
    if(arr[0] === isNaN) {

    }else{

    for(x=0;x<arr.length;x++){
       
        arr2[x] = arr[x][0]
        }
        debugger;
    for (var i=0;i<arr2.length;i++){
        arr3[position-1]=arr2[j];
        j++;
        
        console.log("estamos en la "+arr2[i]);
        for (var x=0;x<arr2.length;x++){
            var check = arr2[i]<arr2[x]
            if (check === false){position++}
        }
        position = 0;
    }
    return arr3
    }
}



// bucle

for (var i=0;i<arr2.length;i++){
	console.log("estamos en la "+arr2[i])
	for (var x=0;x<arr2.length;x++){
    	console.log(arr2[i]<arr2[x])}
}