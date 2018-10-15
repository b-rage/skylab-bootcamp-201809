function join(arr, separator) { 
    var result = "";
    for (var i = 0; i < arr.length; i++){
        result += arr[i];
        result +=  (i != arr.length-1) ? separator : '' ; //Por cada iteracion, añade el numero mas, si i es diferente a 2, el separator, si no un espacio vacio.
    }
    return result;
}