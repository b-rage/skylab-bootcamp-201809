// concat.js
function concat(arr1,arr2){
    var concated=[];
    for (var i = 0; i<arr1.length+arr2.length; i++)
        if(i<arr1.length){
            concated[i]=arr1[i];
        }
        else{
            concated[i]=arr2[i-arr1.length];
        }
    return concated;
}

//input and output:
concat([1,2],[3,4,5]);
(5) [1, 2, 3, 4, 5]