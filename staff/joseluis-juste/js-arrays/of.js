// of.js

function of() {
    
    var output = [];
    var index = -1;

    if (arguments.length === 0) throw Error("elements is empty");

    var val = Array.prototype.find.call(arguments, (x,i) => {
        index = i;
        return x === undefined;
    });

    if (val === undefined){
        throw Error(val + ' is undefined');
    }
    
    for(var i = 0 ; i < arguments.length;i++){
        output[i] = arguments[i];
    }
    return output;
}