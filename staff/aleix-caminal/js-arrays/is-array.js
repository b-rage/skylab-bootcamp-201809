document.querySelector('#is-array').addEventListener('click', function() {
    console.log(isArray([1, 2, 3]));
    console.log(isArray({foo: 123}));
    console.log(isArray('foobar'));
    console.log(isArray(undefined));
});

function isArray(arr) {
    return typeof arr === 'object' && arr.length !== undefined;
}
