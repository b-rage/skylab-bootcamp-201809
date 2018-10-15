function splice(){
    var arraydelete=[];
    var e= 0;
    var array=[];

    if (arguments[2] == undefined){
        for (i=arguments[1];i<months.length;i++){
            arraydelete[e]=months[i];
            e++;
        }
        months.length=arguments[1];   
    } else  {
        var i;
        for(i=0;i<arguments[1];i++){
            array[i]=months[i];
        }
        for(e=arguments[2]+1;e<months.length;e++){
            array[i]=months[e];
            i++;
        }
        e=0;
        for (i=arguments[1];i<arguments[2]+1;i++){
            arraydelete[e]=months[i];
            e++;
        }
        
        var l = months.length;
        var p = months.length-arraydelete.length;
        months.length -= p;
        
        for(i=0;i<months.length;i++){
            months[i]=array[i];
        }


    }
    return arraydelete;
   

    // if (months.length==0){
    //     first='undefined'
    // }else{
    //     var array=[]
    //     for (i=0;i<months.length-1;i++){
    //         array[i]=months[i+1];
    //     }
    //     var first= months[0]
    //     months.length--;
    //     for (i=0;i<months.length;i++){
    //         months[i]=array[i];
    //     }
    // }  
}