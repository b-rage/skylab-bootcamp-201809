function map(array, f){
    new_array = [];
    for(var i = 0; i<array.length ; i++){
        new_array[i]=(f(array[i]));
    }
    return new_array;
}