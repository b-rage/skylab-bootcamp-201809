document.querySelector('#index-of').addEventListener('click', function() {
    var arr = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(indexOf(arr, 'bison'));
});

function indexOf(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i;
        }
    }
}
