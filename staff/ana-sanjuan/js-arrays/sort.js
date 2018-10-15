
function sort(arr) {
    if (!(arr instanceof Array)) throw Error ('array is not valid');
    if (!arr.length) throw Error ('array is empty');

    var temp;

    for (var j = 0; j < arr.length -1; j++){
        for (var i = 0; i < arr.length; i++){
            if (arr[i] > arr[i +1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}
