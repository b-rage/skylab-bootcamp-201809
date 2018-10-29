// ayay.test.js

(function() {
    console.log('TEST Ayay.prototype.push');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should push values in ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        if (ayay.length !== 3) throw Error('ayay length does not match expected one: ' + ayay.length);

        for (var i = 0; i < ayay.length; i++) 
            if (ayay[i] !== i + 1) throw Error('item does not match expected at position: ' + i);
    });

    // TODO add more test cases
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.forEach');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should iterate on valid ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var result = [];

        ayay.forEach(function(elem, index) { result[index] = elem * 2; });

        if (result.length !== ayay.length) throw Error('result length does not match expected one: ' + result.length);

        result.forEach(function(elem, index) {
            if (elem !== ayay[index] * 2) throw Error('item does not match expected one, at position: ' + index);
        });
    });
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.pop');
    
    var tests = [];
    
    tests.pop(function() {
        debbuger
        console.log('should delete values in ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);
        ayay.pop();

        if (ayay.length !== 2) throw Error('ayay length does not match expected one: ' + ayay.length);

        for (var i = 0; i < ayay.length; i++) 
            if (ayay[i] !== i - 1) throw Error('item does not match expected at position: ' + i);
    });

    // TODO add more test cases
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.map');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should iterate on valid ayay');

        var ayay = new Ayay();

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            ayay.push(4);

            var result = [];

            ayay.map(function(elem, index) { result[index] = elem * 3; });

            if (result.length !== ayay.length) throw Error('result length does not match expected one: ' + result.length);

            result.forEach(function(elem, index) {
                if (elem !== ayay[index] * 3) throw Error('item does not match expected one, at position: ' + index);
            });
    });
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.filter');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should iterate on valid ayay');

        var ayay = new Ayay();
        
        ayay.push(6);
        ayay.push(4);
        ayay.push(9);
        ayay.push(2);

        var result = [];
        
        ayay.filter(function(elem, index) { return ayay[index] > 7; });
        debugger;
        if (result.length !== 2) throw Error('result length does not match expected one: ' + result.length);
        
    });
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.find');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should iterate on valid ayay');

        var ayay = new Ayay();
        
        ayay.push(6);
        ayay.push(42);
        ayay.push(9);
        ayay.push(30);
        ayay.push(85);

        var result = [];
        
        ayay.find(function(elem, index) { return ayay[index] > 31; });
        
        if (result.length !== 42) throw Error('result length does not match expected one: ' + result.length);
        
    });
    
    testSuite(tests);
})();