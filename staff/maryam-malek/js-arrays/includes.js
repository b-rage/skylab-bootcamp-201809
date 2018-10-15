function includes(arr, elem) {
    if(!arr && !elem) throw Error ('function must contain two arguments')
    if(!(arr instanceof Array)) throw Error ('array is not valid');
    if(!arr.length) throw Error ('array cannot be empty')
    if(!elem) throw Error ('item to search is missing');
    if(elem instanceof Array) throw Error ('item to search cannot be an array')
    var inclu = false;
    for(i=0; i<arr.length; i++){
        if(arr[i] === elem){
            inclu = true;
            return inclu;        
        }
    }
}