function join(arr, separator){
    var output = "";

    if (separator === undefined) separator = ",";

    if (!(arr instanceof Array)) throw Error("Invalid or unexpected token");

    for(var i = 0; i < arr.length; i++){

        output += arr[i] +  (i+1 == arr.length ? "" : separator);
    }
    return output;
}