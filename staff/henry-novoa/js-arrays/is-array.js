
//create a function that works as Array.prototype.isArray

// is-array.js

function isArray(arr) {
    if(typeof arr === "object" && typeof arr.length === "number" ){
        return true;
    }
    else{
        return false;
    }
}



