

function push(arr, elem) {
    if(!(arr instanceof Array))  throw Error ('array is not valid') 
    if(elem === undefined)  throw Error ('element not defined') 

    return arr[arr.length] = elem;
}


