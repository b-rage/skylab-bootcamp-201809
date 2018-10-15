console.log('TEST Push');

 var tests = [];



 tests.push(function () {
    console.log('must succeed when pushing a new element');
     var arr = [1, 2, 3];
    var expectedResult = [1, 2, 3, 4]
     push(arr, 4);
     arr.forEach((element, i) => {
        if (element !== expectedResult[i]) throw Error('not return the expected result');
    });
    
    console.log('%c Done %s','color: green', '✔');
 });

 
 tests.push(function () {
     console.log('should push an array inside another');
     var arr = [1, 2, 3];
    var expectedResult = [1, 2, 3, [4]]
     push(arr, [4]);
    
    arr.forEach((element, i) => {
        if (element.length && !(element instanceof Array)  && element[0] !== expectedResult[i][0]) throw Error('results do not match');
    });
    
    console.log('%c Done %s','color: green', '✔');
});