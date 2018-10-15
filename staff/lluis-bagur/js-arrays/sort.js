function sort(arr) {
    var aux;
    var array=[];


    for(var e=0;e<arr.length; e++){
        array[e]=arr[e];
    
    }

    for(var i=0; i<array.length -1; i++){
        for (var j=0; j<array.length -i -1; j++){
            if(array[j+1] < array[j]){
                aux = array[j+1];
                array[j+1] = array[j];
                array[j]= aux;
            }
        }
    }
    return array;
}

//

document.querySelector('#sort').addEventListener('click', function() {
    var months = ['March', 'Jan', 'Feb', 'Dec'];
    console.log(sort(months));
    console.log(months);
    var nums = [1, 30, 4, 21];
    console.log(sort(nums));
    console.log(nums);
});

function sort(arr) {
    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');

    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i; j < arr.length; j++) {
            if ('' + arr[j] < '' + arr[min]) {
                min = j;
            }
        }

        var sorted = arr[i];
        arr[i] = arr[min];
        arr[min] = sorted;
    }
    return arr;
}