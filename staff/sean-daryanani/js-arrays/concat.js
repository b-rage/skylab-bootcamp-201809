function concat() {
    var arrCombined = [];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "object") {
            for (var j = 0; j < arguments[i].length; j++) {
                arrCombined[j + (i * arguments[i].length)] = arguments[i][j];

            }
        } else {
            arrCombined[arrCombined.length] = arguments[i];

        }
    }
    return arrCombined;
}