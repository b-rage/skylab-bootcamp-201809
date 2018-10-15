document.querySelector('#includes').addEventListener('click', function() {
    var arr = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(includes(arr, 'duck'));
});

function includes(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}
