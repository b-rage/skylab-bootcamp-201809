function shift(arr) {
    var first = arr[0];
    var array = [];

    //if (typeof arr == 'undefined') throw Error ('no parameter has been introduced');
    if (!(arr instanceof Array)) throw Error (arr + 'input is not array');
    if (!arr.length) throw Error ('array is empty');

        for (var i=0; i<arr.length; i++){
            array[i]=arr[i+1];
        }
        arr.length--;

        for (var e=0; e<arr.length; e++){
            arr[e]=array[e];
        }

        return first;
}