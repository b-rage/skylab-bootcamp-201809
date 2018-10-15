//Esta funcion no tiene caso de error, de manera que me he inventado 2.

function of() {
    var array=[];

    if (!arguments.length) throw Error('elements is empty');
    
    for (var i=0; i<arguments.length; i++){
        if (arguments[i] === undefined) throw Error(arguments[i] + ' is undefined');
    }
    

    for (var i=0; i<arguments.length; i++){
        array[i]=arguments[i];
    }
    console.log (array);

}
