function concat() {
    var temp = [];
    var cont = 0;
    for (var j = 0; j < arguments.length; j++) {
        if (typeof arguments[j] !== "object") {
            temp[cont] = arguments[j];
            cont++;
        } else {
            for (var i = 0; i < arguments[j].length; i++) {
                temp[cont] = arguments[j][i];
                cont++;
            }
        }
     }
    return temp;
} 