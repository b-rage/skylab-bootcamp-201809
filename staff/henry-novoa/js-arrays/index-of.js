// index-of.js

function indexof(arr, elem) {
    if(arr === undefined) throw Error("undefined is not an array!")
    if(!(arr instanceof Array)) throw Error("first parameter should be an array!")
    if(!arr.length) throw Error("one argument is empty");

    for(var i = 0; i<arr.length; i++){
            if(arr[i] === elem){
                return i;

            }
        }


    }
    
    
    