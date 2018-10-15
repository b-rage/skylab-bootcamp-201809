function unshift() {
    var arr = arguments[0];
    var arrLen = arr.length;
    var newArr = arr;
    var elemArr = [];
    for(i= 0; i< arguments.length-1; i++){
        elemArr[i] = arguments[i+1];
    }
    for(var x=0; x<arr.length; x++){
        elemArr[arrLen-1+x] = arr[x];
    }
    for(var z=0; z< elemArr.length; z++){
        newArr[z] = elemArr[z];
    }
    return elemArr.length;
}