
function pop(arr){
        if (!(arr instanceof Array)) throw Error('input is not an array');
        if(!arr.length) throw Error('array is empty');
        if(arguments[1]!==undefined) throw Error ('only one argument allowed');
         var temp=arr[arr.length-1];
        if(arr.length>0) arr.length--;
        return temp;
    } 