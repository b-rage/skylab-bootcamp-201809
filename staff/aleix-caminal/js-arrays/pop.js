document.querySelector('#pop').addEventListener('click', function() {
    var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    console.log(pop(plants));
    console.log(plants);
    console.log(pop(plants));
    console.log(plants);
});

function pop(arr) {
    var result = arr[arr.length - 1];
    arr.length--;
    return result;
}
