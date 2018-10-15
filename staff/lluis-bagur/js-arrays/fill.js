function fill(arr, value, start, end) {
    if (arr===undefined) throw Error(arr + ' is not valid')
    if (typeof arr === 'string') throw Error(arr + ' is not valid')
    if (typeof arr ==='number') throw Error(arr + ' is not valid')
    if (!(arr instanceof Array)) throw Error(arr + ' is not valid')
    for (var i=0; i<arr.length; i++) {
        if (start===undefined && end === undefined) {
            arr[i] = value;
         }
         else if(start != undefined & end === undefined) {
             if (i>=start) {
                 arr[i] = value;
             }
         }
         else {
             if (i>=start && i<=end) {
                 arr[i]=value;
             }
         }
     }
     return arr;
 }