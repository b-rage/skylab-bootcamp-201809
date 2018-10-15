function slice (array, start, end) {
    

        if(!(array instanceof Array)){throw Error ('array is not valid')}
        
        var newArray = [];

        if(start === undefined){
            
            newArray = array;

        } else if(end === undefined){

            if(typeof start !== "number"){throw Error ('start is not valid');}
            var index = 0;
            for(i=start; i<array.length; i++){
                newArray[index++] = array[i];
            }

        } else {
            if(typeof end !== "number"){throw Error ('end is not valid');}
            var index = 0;
            for(i=start; i<end; i++){
                newArray[index++] = array[i];
            }

        }

        return newArray;
}