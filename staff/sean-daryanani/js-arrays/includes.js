    function includes(arr, elem, index) {
        if (elem===undefined) {
            throw Error('element is not defined');
        }
        if (typeof elem === 'function') {
            throw Error('element is a function, must be a string or number or object or boolean');
        }

        if (elem.trim()==='') {
            throw Error('element is blank');
        }
        if (arr.length===0) {
            throw Error('array is empty');
        }
        if (index===undefined) {
            var i=0;
        }
        else if (index> arr.length) {
            return false;
        }
        else {
            i = index;
        }
        for (i; i<arr.length; i++) {
            if (elem===arr[i]) {
                return true;
            }
        }
        return false;
    }