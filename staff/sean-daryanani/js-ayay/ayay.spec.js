describe('Ayay', function () {
    var ayay;

    beforeEach(function () {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should return new length of ayay', function () {
            var push = ayay.push(1, 2, 3);
            expect(push).toEqual(3);
        });

        it('pushed array should have correct length', function () {
            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);
        });

        it('should have the correct items', function () {
            ayay.push(1, 2, 3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should continue being an ayay', function () {
            ayay.push(1, 2, 3);
            expect(ayay instanceof Ayay).toEqual(true);
        });

        it('Should be able to push elements one at a time', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var desired = [1, 2, 3];
            for (var i = 0; i < desired.length; i++) {
                expect(ayay[i]).toEqual(desired[i]);
            }
        });

        it('should be able to push arrays', function () {
            ayay.push(1, 2, 3, [4, 5, 6])
            var res = [1, 2, 3, [4, 5, 6]];
            for (var i = 0; i < ayay.length; i++) {
                expect(ayay[i]).toEqual(res[i]);
            }
        });



    });

    describe('pop', function () {
        it('should return last item of original array', function () {
            ayay.push(1, 2, 3);
            var popped = ayay.pop();
            expect(popped).toEqual(3);
        });

        it('length should be one less than original array', function () {
            ayay.push(1, 2, 3);
            var popped = ayay.pop();
            expect(ayay.length).toEqual(2);
        });

        it('elements should match original array', function () {
            ayay.push(1, 2, 3);
            var popped = ayay.pop();
            for (var i = 0; i < ayay.length; i++) {
                expect(ayay[i]).toEqual(i + 1);
            }
        });
        it('should return undefined if empty array', function () {
            var popped = ayay.pop();
            expect(popped).toEqual(undefined);
        });

    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);

            var result = new Ayay();

            ayay.forEach(function (elem) {
                return result.push(elem * 2);
            });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });
        it('should succeed on returning all specified data on callback', function () {
            ayay.push(1, 2, 3);

            var items = [];
            var indexes = [];
            var arr = [];

            ayay.forEach(function (elem, index, array) {
                items.push(elem);
                indexes.push(index);
                arr.push(array);
            });
            
            var lengthArray = [items.length, indexes.length, arr.length] 
            lengthArray.forEach(function(el){ expect(el).toEqual(3)});

            items.forEach(function (elem, index) {
                expect(ayay[index]).toEqual(elem);
            });
            indexes.forEach(function (i, index) {
                expect(i).toEqual(index);
            });


        });
        it('should fail if callback is undefined', function () {
            ayay.push(1, 2, 3);
            var p = 2;

            expect(function () {
                ayay.forEach()
            }).toThrowError('undefined is not a function');

        });
        it('should fail if callback is a number', function () {
            ayay.push(1, 2, 3);
            var p = 2;

            expect(function () {
                ayay.forEach(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a string', function () {
            ayay.push(1, 2, 3);
            var p = 'hello';

            expect(function () {
                ayay.forEach(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a boolean', function () {
            ayay.push(1, 2, 3);
            var p = 'true';

            expect(function () {
                ayay.forEach(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is null', function () {
            ayay.push(1, 2, 3);
            var p = null;

            expect(function () {
                ayay.forEach(p)
            }).toThrowError(p + ' is not a function');

        });
    });


    describe('map', function () {
        it('should create a new array with the desired results', function () {
            ayay.push(1, 2, 3);

            var result = new Ayay();

            result = ayay.map(function (elem) {
                return elem * 2;
            });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should succeed on returning all specified data on callback', function () {
            ayay.push(1, 2, 3);

            var items = [];
            var indexes = [];
            var arr = [];

            ayay.map(function (elem, index, array) {
                items.push(elem);
                indexes.push(index);
                arr.push(array);
            });

            expect(items.length).toEqual(3)
            expect(indexes.length).toEqual(3)
            expect(arr.length).toEqual(3)

            items.forEach(function (elem, index) {
                expect(ayay[index]).toEqual(elem);
            });
            indexes.forEach(function (i, index) {
                expect(i).toEqual(index);
            });


        });
        it('should fail if callback is undefined', function () {
            ayay.push(1, 2, 3);
            var p = 2;

            expect(function () {
                ayay.map()
            }).toThrowError('undefined is not a function');

        });
        it('should fail if callback is a number', function () {
            ayay.push(1, 2, 3);
            var p = 2;

            expect(function () {
                ayay.map(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a string', function () {
            ayay.push(1, 2, 3);
            var p = 'hello';

            expect(function () {
                ayay.map(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a boolean', function () {
            ayay.push(1, 2, 3);
            var p = 'true';

            expect(function () {
                ayay.map(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is null', function () {
            ayay.push(1, 2, 3);
            var p = null;

            expect(function () {
                ayay.map(p)
            }).toThrowError(p + ' is not a function');

        });
    });

    describe('sort', function () {

        it('should modify the original array', function () {
            ayay.push(7, 4, 2, 1, 3, 9);
            var original = [7, 4, 2, 1, 3, 9];
            ayay.sort();
            expect(JSON.stringify(ayay)===JSON.stringify(original)).toEqual(false);


        });

        it('should sort and array and return it', function () {
            ayay.push(7, 4, 2, 1, 3, 9);
            ayay.sort();
            var desired = [1, 2, 3, 4, 7, 9];


            for (var i = 0; i < ayay.length; i++) {
                expect(ayay[i]).toEqual(desired[i]);
            }


        });

        it('should have the same length as the original array', function () {
            ayay.push(7, 4, 2, 1, 3, 9);
            ayay.sort();
            var desired = [1, 2, 3, 4, 7, 9];
            expect(ayay.length).toEqual(desired.length);

        });
    });


    describe('filter', function () {
        
        it('should return a new array with desired items', function () {
            ayay.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

            var result = ayay.filter(function (elem) {
                return elem % 2 === 0;
            });

            var desiredResult = [2, 4, 6, 8, 10];

            expect(result.length).toEqual(desiredResult.length);

            for (var i = 0; i < result.length; i++) {
                expect(result[i]).toEqual(desiredResult[i]);
            }
        });

        it('should fail if callback is undefined', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.filter()
            }).toThrowError('undefined is not a function');

        });
        it('should fail if callback is a number', function () {
            ayay.push(1, 2, 3);
            var p = 2;

            expect(function () {
                ayay.filter(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a string', function () {
            ayay.push(1, 2, 3);
            var p = 'hello';

            expect(function () {
                ayay.filter(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a boolean', function () {
            ayay.push(1, 2, 3);
            var p = 'true';

            expect(function () {
                ayay.filter(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is null', function () {
            ayay.push(1, 2, 3);
            var p = null;

            expect(function () {
                ayay.filter(p)
            }).toThrowError(p + ' is not a function');

        });
    });

    describe('find', function () {
        it('should return the first element in the array that satisfies the condition ', function () {
            ayay.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            result = ayay.find(function (el) {
                return el > 5
            })
            expect(result).toEqual(6);
        });

        it('should return undefined if nothing is found', function () {
            ayay.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            result = ayay.find(function (el) {
                return el > 11
            })
            expect(result).toEqual(undefined);
        });

        it('should fail if callback is undefined', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.find()
            }).toThrowError('undefined is not a function');

        });
        it('should fail if callback is a number', function () {
            ayay.push(1, 2, 3);
            var p = 2;

            expect(function () {
                ayay.find(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a string', function () {
            ayay.push(1, 2, 3);
            var p = 'hello';

            expect(function () {
                ayay.find(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is a boolean', function () {
            ayay.push(1, 2, 3);
            var p = 'true';

            expect(function () {
                ayay.find(p)
            }).toThrowError(p + ' is not a function');

        });
        it('should fail if callback is null', function () {
            ayay.push(1, 2, 3);
            var p = null;

            expect(function () {
                ayay.find(p)
            }).toThrowError(p + ' is not a function');

        });
    });

    describe('join', function () {
        it('should return new string with all items seperated by the specified separator ', function () {
            ayay.push(1, 2, 3);
            var elem="-";
            var res = "";
            res = ayay.join(elem);
            expect(res).toEqual("1-2-3")
        });
        it('should succeed on joining items with comma if no separator is specified ', function () {
            ayay.push(1, 2, 3);
            var res = "";
            res = ayay.join();
            expect(res).toEqual("1,2,3")
        });
        it('should succeed on joinin items without a separator if empty string is passed', function () {
            ayay.push(1, 2, 3);
            elem= "";
            var res = "";
            res = ayay.join(elem);
            expect(res).toEqual("123")
        });
        it('should output a string', function () {
            ayay.push(1, 2, 3);
            elem= "a";
            var res = "";
            res = ayay.join(elem);
            expect(typeof res).toEqual('string')
        });

    });

});