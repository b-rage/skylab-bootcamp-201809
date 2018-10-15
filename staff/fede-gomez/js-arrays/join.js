function join(array, char){
    var string = '';
    if(!(array instanceof Array)){throw Error ('Invalid or unexpected token');}
    if (!array.length){throw Error ('your string should be empty');}
    if (char === undefined) { 
        for(var i=0; i<array.length-1; i++) {
                string += array[i] + ',';
        }    
        string += array[i];
    } else {
        for(var i=0; i<array.length-1; i++) {
                string += array[i] + char;
        }
        string += array[i];
    }    
    return string;
}