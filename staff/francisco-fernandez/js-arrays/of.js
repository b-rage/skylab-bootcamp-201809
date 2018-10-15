function of (){

    if (!arguments.length) throw Error('elements is empty');

    if (arguments[i] === undefined) throw Error(arguments[i] + ' is undefined');

    var array = [];
    if(arguments.length===0){
        console.log(array[0]=undefined);
        return array;
    }
    else {
        for(var i = 0; i < arguments.length; i++){
            array[i]=arguments[i];
        }
        console.log(array);
        return array;
    }
}