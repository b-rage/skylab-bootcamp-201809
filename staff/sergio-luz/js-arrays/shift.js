function shift(arg){
    if( typeof arg === "undefined") throw Error('no parameter has been introduced');
    if (!(arg instanceof Array)) throw Error('input is not array');
    if(!arg.length)    throw Error('array is empty');
    //if (!arg[0].length) throw Error ('first element of array is empty');

    var temp=arg[0];
    for(var i=1; i<arg.length; i++){
        arg[i-1]=arg[i];
    }
    if(arg.length>0) {  arg.length--;}
    return temp;
}