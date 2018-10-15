function findIndex(arr, funct) {
    var index = 0;
    var num = false;

    for(index=0; index<arr.length; index++) {

        num = funct(arr[index]);

        if (num==true) {
            return index;
        }
    }   
}