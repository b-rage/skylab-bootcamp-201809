function sort(input) {
   
    if (!(input instanceof Array)) throw Error("array is not valid");

    if (input.length === 0) throw Error("array is empty");

    for(var i = 0;i < input.length;i++){
        input[i] = input[i];
    }

    for (var i = 0; i < input.length - 1; i++) {
        for (var j = 1; j < input.length; j++) {
            if (input[j] < input[j - 1]) {   
                var aux_elem = input[j];
                input[j] = input[j - 1];
                input[j - 1] = aux_elem;

            }
        }
    }
    return input;
   
}


