function concat(arr, arr2){

    arr3=[];

    if (!(arguments[0] instanceof Array)) throw Error('first element is not an array');

    if (!(arguments[1] instanceof Array)) throw Error('second element is not an array');

    if (arguments[0].length === 0) throw Error('first array should be contain elements');

    if (arguments[1].length === 0) throw Error('second array should be contain elements');

for(x=0;x<arr.length;x++){
    arr3[x] = arr[x];
}
for(i=0;i<arr.length;i++){
    arr3[arr3.length] = arr2[i]
}
return arr3;
}