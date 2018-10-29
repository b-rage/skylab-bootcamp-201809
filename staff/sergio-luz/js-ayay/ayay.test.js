// ayay.test.js

(function () {
    console.log('TEST Ayay.prototype.push');

    var tests = [];

    tests.push(function () {
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

(function () {
    console.log('TEST Ayay.prototype.pop');

    var tests = [];

    tests.push(function () {
        console.log('should pop values in ayay');

        var ayay = new Ayay();
        ayay.push(1);
        ayay.push(2);
        ayay.push(3);
        var res = [];

        res[0] = ayay.pop();
        res[1] = ayay.pop();
        res[2] = ayay.pop();

        console.log(res, ayay);
        if (res.length !== 3) throw Error('result length does not match expected one: ' + res.length);

    });
    // TODO add more test cases

    testSuite(tests);
})();

(function () {
    console.log('TEST Ayay.prototype.forEach');

    var tests = [];

    tests.push(function () {
        console.log('should iterate on valid ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var result = [];

        ayay.forEach(function (elem, index) {
            result[index] = elem * 2;
        });

        if (result.length !== ayay.length) throw Error('result length does not match expected one: ' + result.length);

        result.forEach(function (elem, index) {
            if (elem !== ayay[index] * 2) throw Error('item does not match expected one, at position: ' + index);
        });
    });

    testSuite(tests);
})();

(function () {
    console.log('TEST Ayay.prototype.map');

    var tests = [];

    tests.push(function () {

        var ayay = new Ayay();
        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var res = [];

        ayay.map(function (element, index) {
            res[index] = element * 2;
        });

        if (res.length !== ayay.length) throw Error('result length does not match expected one: ' + res.length);

        res.forEach(function (elem, index) {
            if (elem !== ayay[index] * 2) throw Error('item does not match expected one, at position: ' + index);
        });
    });

    testSuite(tests);
})();

(function () {
    console.log('TEST Ayay.prototype.sort');

    var tests = [];

    tests.push(function () {
        console.log('should modify the original array');

        var ayay = new Ayay();
        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var res = [];

        res = ayay.sort();

        if (res.length !== ayay.length) throw Error('result length does not match expected one: ' + res.length);

        if (JSON.stringify(ayay) !== JSON.stringify(res)) throw Error('the original array hasn\'t been modified');
    });

    testSuite(tests);
})();

(function () {
    console.log('TEST Ayay.prototype.filter');

    var tests = [];

    tests.push(function () {
        console.log('It should fail no non-array first parameter');

        var ayay = new Ayay();
        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var res = [];

        res = ayay.filter(function (elem) {
            return elem < 2;
        });

        if (!error) throw Error('has not failed');

        // if (error.message !== 'first element is not an ayay') {
        //     throw Error('error message is not as expected');
        // }
    });

    testSuite(tests);
})();