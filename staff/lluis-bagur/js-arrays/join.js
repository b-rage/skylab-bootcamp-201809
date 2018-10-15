function join(arr, string){
    if (!(arr instanceof Array)) throw Error('Invalid or unexpected token');
     var temp="";
    var _string=",";
    if(string!==undefined)_string=string;
    if(arr.length===0){
        return temp="";
    }
    for (var i=0; i<arr.length-1; i++){
        temp+=arr[i]+_string
    }
    temp+=""+arr[arr.length-1];
    return temp;
} 