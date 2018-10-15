function isArray(arr) {
    // var is = true;
    // var str = '';
    // if(typeof arr === 'string' || typeof arr === 'number' || typeof arr === 'boolean' || typeof arr === 'null' || typeof arr === 'undefined'){
    //     is = false;
    // } //else{
    // //     for(i=0; i<arr.length; i++){
    // //         str += arr[i];
    // //     } 
    // //     if(typeof str === 'string'){
    // //         is = false;
    // //     }
    // // }
    // return is;
    return arr instanceof Array;
}