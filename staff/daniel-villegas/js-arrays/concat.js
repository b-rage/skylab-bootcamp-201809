//2) concat.js
//create a function that works as Array.prototype.concat
// concat.js
function concat(arr, arr2) {
    var conc = [arr + "," + arr2][0].split(",");
    for (var i = 0; i < conc.length; i++){  
        conc[i] = Number(conc[i]);
    }
    return conc;
}