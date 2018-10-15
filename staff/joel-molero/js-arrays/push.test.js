console.log('TEST Push');

 var tests = [];

 tests.push(function () {
    console.log('should succeed when pushing a new element');
     var arr = [1, 2, 3];
    var expectedResult = [1, 2, 3, 4]
     push(arr, 4);
     arr.forEach((element, i) => {
        if (element !== expectedResult[i]) throw Error('did not return expected result');
    });
    
    
    
 });
 tests.push(function () {
     console.log('should push an array inside another');
     var arr = [1, 2, 3];
    var expectedResult = [1, 2, 3, [4]]
     push(arr, [4]);
    
    arr.forEach((element, i) => {
        if (element.length && !(element instanceof Array)  && element[0] !== expectedResult[i][0]) throw Error('results do not match');
    });
    
   
    
});
 tests.push(function () {
     console.log('should succeed on returning an array')
     var arr = [1, 2, 3];
    var error;
     try {
        push(arr, 'SKYLAB');
    } catch (err) {
        error = err;
    }
     if (!(arr instanceof Array)) throw Error('doesnt return array');
    
    
 });
 testSuite(tests);