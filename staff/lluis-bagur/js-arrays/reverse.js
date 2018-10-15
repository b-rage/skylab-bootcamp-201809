function reverse(arr) {
    var cont = 0;
    var reversed = [];
    for (var i=arr.length-1; i>=0;i--){
        reversed[cont] = arr[i];
            cont ++;
    }
    console.log(reversed);
    
    for (var e=0; e<arr.length;e++){
        arr[e]= reversed[e];
    }
}