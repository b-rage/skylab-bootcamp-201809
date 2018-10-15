function includes (arr, element){
    if(element=== undefined) throw Error('element is not defined');

    if (typeof element == 'function') throw Error ('element is a function, must be a string or number or object or boolean');
     
    if(arr.length===0) throw Error ('array is empty');
    
        for(var i = 0; i <includes.length; i++){
            if (arr[i]=element){
                return true;
            }
        }
        
    return false;
} 