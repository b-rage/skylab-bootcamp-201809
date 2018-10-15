// 2) concat.js

function concat(arguments) {
    var result = []
    for(var i = 0; i < (arr.length + arr2.length); i++) 
        result[i] = (i < arr.length)? arr[i]: arr2[i - arr.length];
    return result  
} 
