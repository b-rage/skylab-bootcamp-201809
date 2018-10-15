
// 
// function pop (array) {

//     var newArray = [];
//     for(let i=0; i<array.length-1; i++){
//         newArray[i] = array[i];
//     }

//     var removed = array[array.length-1];

//     array = newArray;
//     console.log('newArray: ' + newArray);
    
//     return removed;
// }

function pop (array) {

    if(!(array instanceof Array)){throw Error ('input is not an array');}
    if(!array.length){throw Error ('array is empty');}
    if(arguments.length>1){throw Error ('only one argument allowed');}

    var removed = array[array.length-1];
    array.length--;

    return removed;
}