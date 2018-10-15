function concat(){
    var output = [];
    var aux = 0;

    if (!(arguments[0] instanceof Array)) throw Error('first element is not an array');

    if (!(arguments[1] instanceof Array)) throw Error('second element is not an array');

    if (arguments[0].length === 0) throw Error('first array should be contain elements');

    if (arguments[1].length === 0) throw Error('second array should be contain elements');

    for(var j=0;j < arguments.length; j++){

        for(var i = 0; i < arguments[j].length;i++){
            output[aux] = arguments[j][i];
            aux++;
        }

    }
    return output;
}