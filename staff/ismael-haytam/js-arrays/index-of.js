function indexOf(arr, elem) {
    
    // validation
    if (!(arr instanceof Array))  throw Error("first parameter should be an array!")
    
    if (!arr.length || !elem.length)  throw Error("one argument is empty");

    // logic
    for (var i = 0; i < arr.length; i++) if (arr[i] == elem) return i;
}

