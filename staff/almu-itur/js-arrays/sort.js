function sort(arr) {

    var indexMain = 0;
    var indexSecondary = 0;
    var indexTemp = 0;
    var tempItem = [];
    var arraySorted = [];
    var arrString = [];
    var swap = false;

    for (var i = 0; i < arr.length; i++) {
        arrString[i] = arr[i].toString();
    }

    for(indexMain = 0; indexMain < arrString.length; indexMain++) {
        
        tempItem = arrString[indexMain];

        for(indexSecondary = indexMain + 1; indexSecondary < arrString.length; indexSecondary++) {
            
            if(arrString[indexSecondary] < tempItem) {
                tempItem = arrString[indexSecondary];
                indexTemp = indexSecondary;
                swap = true;
            }
        }
        if (swap) { 
            arraySorted[indexMain] = tempItem;
            arrString[indexTemp] = arrString[indexMain];
            swap = false;
        }
        else { arraySorted[indexMain] = arrString[indexMain]; }
        }
        arr = arraySorted;
        return arr;
}