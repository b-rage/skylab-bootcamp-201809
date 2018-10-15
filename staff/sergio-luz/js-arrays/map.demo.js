console.log("1) Executing map demo");

var arr = [1, 2, 3];

var res = map(arr, function(num) { 
    return (num * 2);
})

console.log("res: " +res);