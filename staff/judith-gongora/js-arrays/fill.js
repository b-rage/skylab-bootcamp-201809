function fill(){
    if (!(arguments[0] instanceof Array)) throw Error(arguments[0] +' is not valid');
    
    if (arguments[1] == undefined){
        for (i=0;i<arguments[0].length;i++){
            arguments[0][i]=undefined;
        }
    }
    if (arguments[2] == undefined){
        for (i=0;i<arguments[0].length;i++){
            arguments[0][i]=arguments[1];
        }
    }else if (arguments[3] == undefined){
        var save;
        if (arguments[2]<0){
            save = arguments[0].length+arguments[2];
        }
        for (i=save;i<arguments[0].length;i++){
            arguments[0][i]=arguments[1];
        }  
    } else  {
        var save;
        var save1;
        if (arguments[2]<0){
            save = arguments[0].length+arguments[2];
        }
        if (arguments[3]<0){
            save1 = arguments[0].length+arguments[3];
        }

        if (save<0){
            save=0;
        }

        if (save1>arguments[0].length){
            save1=arguments[0].length;
        }

        for (i=save;i<save1;i++){
            arguments[0][i]=arguments[1];
        }  
    }
    return arguments[0];
}