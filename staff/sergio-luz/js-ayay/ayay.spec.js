describe('Ayay', function () {
    let ayay;

    beforeEach(function () {
        ayay = new Ayay();
    });

    describe('push', function () {
        it('should push items', function () {
            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('element is not required', function () {
            expect(ayay.push()).toEqual(0);
        });

        it('it should continue being an ayay', function () {
            ayay.push(1, 2, 3);

            ayay.push('SKYLAB');
            expect(ayay instanceof Ayay).toBe(true);
        });

        it('it should push items mantaining them type', function () {
            ayay.push(1, 2, 3);

            ayay.push('SKYLAB', {
                hola: 'mundo'
            });

            var real_array = [1, 2, 3, 'SKYLAB', {
                hola: 'mundo'
            }];

            for (var i = 0; i < ayay.length; i++)
                expect(typeof ayay[i]).toEqual(typeof real_array[i]);
        });

        it('it should push a lot of elements at the same time', function () {

            expect(ayay.length).toEqual(0);

            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);
        });

        it('it should return the ayay length', function () {

            expect(ayay.push(1, 2, 3)).toEqual(3);
        });
    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);

            var result = [];

            ayay.forEach(function (elem, index) {
                result[index] = elem * 2;
            });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should fail on non-function callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.forEach();
            }).toThrowError('undefined is not a function');
        });

        it('should succed executing callback', function () {
            ayay.push(1, 2, 3);

            var res = [];
            ayay.forEach(function (val, index) {
                res[index] = val;
            });

            res.forEach(function (val, index) {
                expect(val).toEqual(ayay[index]);
            });
        });

        it('should fail on array instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.forEach([1, 2]);
            }).toThrowError('1,2 is not a function');
        });

        it('should fail on object instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.forEach({
                    op: [1, 2]
                });
            }).toThrowError('[object Object] is not a function');
        });


        it('should fail on string instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.forEach('string');
            }).toThrowError('string is not a function');
        });

        it('should fail on string instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.forEach(1);
            }).toThrowError('1 is not a function');
        });
    });

    describe('pop', function () {
        it('should pop values in ayay', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res[0] = ayay.pop();
            res[1] = ayay.pop();
            res[2] = ayay.pop();

            expect(res.length).toEqual(3);
            expect(ayay.length).toEqual(0);

        });

        it('should sucessfully return popped item', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res = ayay.pop();

            expect(res).toEqual(3);
        });

        it('should return undefined because of empty array', function () {
            expect(ayay.pop()).toEqual(undefined);
        });

        it('should succed if detected arguments', function () {
            ayay.push(1, 2, 3);

            expect(ayay.pop('hola')).toEqual(3);
        });
    });

    describe('map', function () {
        it('should succeed on iterating an ayay and multiply by 2', function () {
            ayay.push(1, 2, 3);

            var res = [];
            ayay.map(function (element, index) {
                res[index] = element * 2;
            });

            expect(res.length).toEqual(3);

            res.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });

        });

        it('should fail on empty array', function () {
            var res = [];

            expect(function () {
                ayay.map(function (element, index) {
                    res[index] = element * 2;
                });
            }).toThrowError('array is not valid');

        });

        it('should fail on non-function callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.map();
            }).toThrowError('callback is not a function');

        });

        it('should return an array of undefined on empty callback function', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res = ayay.map(function () {});

            res.forEach(function (elem) {
                expect(elem).toEqual(undefined);
            });
        });

        it('should fail on empty callback', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res = ayay.map(function () {});

            res.forEach(function (elem) {
                expect(elem).toEqual(undefined);
            });
        });

        it('should fail on boolean instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.map(true);
            }).toThrowError('callback is not a function');
        });

        it('should fail on number instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.map(1);
            }).toThrowError('callback is not a function');
        });

        it('should fail on string instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.map("hola");
            }).toThrowError('callback is not a function');
        });

        it('should fail on array instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.map([1, 2]);
            }).toThrowError('callback is not a function');
        });

        it('should fail on object instead of callback', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.map({
                    op: [1, 2]
                });
            }).toThrowError('callback is not a function');
        });
    });

    describe('sort', function () {
        it('should modify the original array', function () {
            ayay.push(4, 1, 2, 3);
            var original = [4, 1, 2, 3];

            var res = [];
            res = ayay.sort();

            expect(JSON.stringify(ayay) === JSON.stringify(original)).toEqual(false);
        });

        it('should succed sorting', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res = ayay.sort();

            expect(JSON.stringify(ayay)).toEqual(JSON.stringify(res));
        });

        it('should maintain the same length', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res = ayay.sort();

            expect(res.length).toEqual(3);
        });

    });

    describe('filter', function () {
        it('It should succed filtering', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res = ayay.filter(function (elem) {
                return elem <= 2;
            });

            expect(res.length).toEqual(2);

            var filtered = [1, 2, 3].filter(function (elem) {
                return elem <= 2;
            });
            res.forEach(function (element, index) {
                expect(element).toEqual(filtered[index]);
            });
        });

        it('It should fail on non-function second parameter', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.filter();
            }).toThrowError('undefined is not a function');
        });

        it('It should fail on string second parameter', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.filter("string");
            }).toThrowError('string is not a function');
        });

        it('It should fail on number second parameter', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.filter(1);
            }).toThrowError('1 is not a function');
        });

        it('It should fail on boolean second parameter', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.filter(true);
            }).toThrowError('true is not a function');
        });

        it('It should fail on array second parameter', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.filter([1, 2]);
            }).toThrowError('1,2 is not a function');
        });

        it('It should fail on object second parameter', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.filter({
                    ob: "ject"
                });
            }).toThrowError('[object Object] is not a function');
        });

    });

    describe('find', function () {
        it('Should succed finding', function () {
            ayay.push(1, 2, 3);

            var res = [];
            res = ayay.find(function (elem) {
                return elem <= 2;
            });

            expect(res).toEqual(1);
        });

        it('Should give fail if callback is not defined', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.find();
            }).toThrowError('undefined is not a function');
        });

        it('Should give fail if callback is a number', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.find(1);
            }).toThrowError('1 is not a function');
        });


        it('Should give fail if callback is a string', function () {
            ayay.push(1, 2, 3);
            var p = "hola";

            expect(function () {
                ayay.find(p);
            }).toThrowError(p + ' is not a function');
        });

        it('Should give fail if callback is a array', function () {
            ayay.push(1, 2, 3);
            var p = [];

            expect(function () {
                ayay.find(p);
            }).toThrowError(p + ' is not a function');
        });

        it('Should give fail if callback is a object', function () {
            ayay.push(1, 2, 3);
            var p = {
                ob: "hola"
            };

            expect(function () {
                ayay.find(p);
            }).toThrowError(p + ' is not a function');
        });

        it('Should give fail if callback is a boolean', function () {
            ayay.push(1, 2, 3);
            var p = true;

            expect(function () {
                ayay.find(p);
            }).toThrowError(p + ' is not a function');
        });
    });

    describe('slice', function () {
        it('should succeed on extracting a part of an array (copying it to another array)', function () {
            ayay.push(1, 2, 3);
            var start = 0;
            var end = 2;

            var res = [];
            res = ayay.slice(start, end);

            expect(res.length).toEqual(end-start);

            res.forEach(function (val, index) {
                expect(val).toEqual(ayay[index+start]);
            });
        });

        it('should fail on non-ayay', function () {
            var start = 0;
            var end = 2;

            expect(function(){
                ayay.slice(start, end);
            }).toThrowError('ayay is not valid');
        });

        it('should succeed on extracting a concrete part of an array (copying it to another array)', function () {
            ayay.push(1, 2, 3);
            var start = 0;
            var end = 2;

            var res=ayay.slice(start,end);
            var res2=[1,2,3].slice(start, end);

            expect(res).toEqual(res2);
        });

        it('should succed on non-end and non-start', function () {
            ayay.push(1, 2, 3);

            var res=ayay.slice();
            var res2=[1,2,3].slice();

            expect(res).toEqual(res2);
        });

        it('should fail when start is not a number', function () {
            ayay.push(1, 2, 3);
            var start = "start";
            var end = 0;

            expect(function(){
                ayay.slice(start, end);
            }).toThrowError('start is not valid')
        });
    });
});