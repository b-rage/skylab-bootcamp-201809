// for-each.test.js

console.log('TEST forEach');

console.log('should multiply each item of [1, 2, 3] by 2');

var arr = [1, 2, 3];

var res = [];

forEach(arr, function(num, index) { res[index] = num * 2; });

if (res.length !== arr.length) console.error('result length should be 3, but got ' + res.length);
else 
    for(var i = 0; i < res.length; i++)
        if (res[i] !== arr[i] * 2) {
            console.error('result item at index ' + i + ' should be ' + arr[i]*2 + ', but got ' + res[i]);

            break;
        }