function includes(arr, elem) {

    if (!arr.length) throw Error('array is empty')
    
    if (elem === undefined) throw Error('element is not defined')
  
    for (x=0;x<arr.length;x++){
        if(elem === arr[x]){
            return true;
        }
    }return false;
}