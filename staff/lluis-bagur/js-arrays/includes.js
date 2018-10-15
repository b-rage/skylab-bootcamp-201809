function includes(arr, elem, num) {
    var include = false;


    if (!(arr instanceof Array)) throw Error('array is not valid');

    if ( typeof elem === 'undefined') throw Error('element is not defined');

    if(arr.length == 0) throw Error('array is empty');

    if (num !== undefined){
        for (var i=num; i<arr.length; i++){
            if (arr[i] == elem){
                include = true;
            }
        }  
    }
    else{
        for (var i=0; i<arr.length; i++){
            if (arr[i] == elem){
                include = true;
            }
        }  

    }
    return include;
    
}