function splice(months,elem) {

    var aux = [];
    
    if (arguments[2] == undefined){
        var array1 = [];
        var e = 0;
        for (var i = arguments[1];i<months.length;i++){
            array1[e]=months[i];
            e++;
              }
        months.length = arguments[1];
        return array1;
    }
    
    else{
        for (var i = 0;i<months.length;i++){
            aux[e]=months[i];
              }
        var array2 = [];
        for (var i = arguments[1];i<=arguments[2];i++){
            array2[e]=months[i];
            e++;
              }
              
              return array2;
        
    }
}
