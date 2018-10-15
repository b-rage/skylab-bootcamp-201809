function slice(arr,arg1,arg2){

    if(!(arr instanceof Array))throw Error('array is not valid');
    if (typeof arg1!=="number" && typeof arg1!=="undefined") throw Error('start is not valid');
    if (typeof arg2!=="number" && typeof arg2!=="undefined") throw Error('end is not valid');

    

    var newArray=[];
    var j=0;
    if(arg1==undefined){arg1=0;}
    if(arg2==undefined){arg2=arr.length;}
    for(var i = arg1; i < arg2; i++){
        newArray[j]=arr[i];
        j++;
    }
    return newArray;
}

/*function slice(arr, start, end) {

    if (!(arr instanceof Array)) throw Error('array is not valid');
    if (typeof start!=="number" && typeof start!=="undefined") throw Error('start is not valid');
    if (typeof end!=="number" && typeof end!=="undefined") throw Error('end is not valid');


    var temp = [],
        count = 0;
    //comprobamos si hay end
    if (end === undefined || end>=arr.length) {
        end = arr.length;
    }
    if (start == undefined) {
        start = 0;
    }
    if (start < 0 && start < arr.length) {
        count = arr.length - 1 + start;
        for (var i = (arr.length - 1 + start); i >= 0; i--) {
            temp[count] = arr[i];
            count--;
        }
    } else if (start >= arr.length) {
        temp = [];
    } else {
        //Start POSITIVO
        if (end > 0) {
            for (var i = start; i < end; i++) {
                if (start + end == i) {
                    break;
                }
                temp[count] = arr[i];
                count++;
            }
        } else {
            if (start + end < 0) {
                end = start;
            }
            count = -end - 1;
            for (var i = start; i > 0; i--) {
                if (start + end == i) {
                    break;
                }
                temp[count] = arr[i];
                count--;
            }
        }
    }
    return temp;
}*/