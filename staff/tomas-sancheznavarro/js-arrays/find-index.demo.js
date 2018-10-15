console.log('My findIndex Demo');

var arr = [5, 12, 8, 120, 44];

var res = findIndex(arr, function (num) {
    return num > 13;
});

console.log(res); // 3