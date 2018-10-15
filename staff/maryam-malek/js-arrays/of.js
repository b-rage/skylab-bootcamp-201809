function of() {
    // for(var i= 0; i<arguments.length; i++){
    //     if(typeof arguments[i] === 'undefined') throw Error (arguments[i] + ' is undefined');
    // };
    // if(!arguments.length) throw Error ('elements is empty');
    // It has not errors, but this ones are done to try something in of.test.js
    var newArr = [];
    var num = arguments.length;
    for(i=0; i<num; i++){
        newArr[i] = arguments[i];
    }
    console.log(newArr);
}