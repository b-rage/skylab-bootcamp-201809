document.querySelector('#of').addEventListener('click', function() {
    of(7);
    of(1, 2, 3);
    of(undefined);
});

function of(...elems) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        result[result.length] = elems[i];
    }
    console.log(result);
}
