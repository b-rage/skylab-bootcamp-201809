function join(arr,separator){
    if(!(arr instanceof Array)) throw Error ('Invalid or unexpected token');
    var string ="";
    if (separator===undefined){
        separator=',';
    }
    for(var i = 0; i < arr.length; i++){
        string=string+arr[i];
        if (i<arr.length-1){
            string=string+separator;
        }
    }
    return string;
}