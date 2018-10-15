

// sort.js

function sort(arr) {
    var result =[];
    var temp;
    for(var i = 0; i<arr.length;i++){
        result[i] = arr[i].toString();
    }

    for(j=0;j<result.length;j++){
        for(i=0;i<result.length;i++){
            if(result[i] < result[i-1]){
                temp=result[i];
                result[i] = result[i-1];
                result[i-1] = temp;


            }
        }
    }
    for(i=0;i<results.length;i++){
        arr[i]=results[i];
    }
    return arr;
}   
     
    
    


