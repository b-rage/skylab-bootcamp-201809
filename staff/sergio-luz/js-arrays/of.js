function of(){
    if(!arguments.length) throw Error ('elements is empty');
    var temp=[];
    for (var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i]==='undefined') {throw Error(arguments[i]+' is undefined');}
        temp[i]=arguments[i];
    }
    console.log(temp);
    return temp;
}