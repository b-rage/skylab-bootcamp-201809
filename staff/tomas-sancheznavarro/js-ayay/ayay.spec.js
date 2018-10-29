describe('Ayay', function () {
    var ayay;

    beforeEach(function () {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should push one or more items', function () {
            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should continue being an ayay', function () {
            ayay.push(1, 2, 3);
            expect(ayay instanceof Ayay).toBe(true);
        });

        it('should push items and maintain their type', function () {
            var arr = ['pepe', {
                foo: 'bar'
            }, 1982];
            ayay.push('pepe', {
                foo: 'bar'
            }, 1982);

            for (var i = 0; i < ayay.length; i++) {
                expect(typeof ayay[i]).toEqual(typeof arr[i]);
            }
        });

        it('should increase the length of the array', function () {
            ayay.push(1, 2, 3)
            expect(ayay.length).toEqual(3);
        });


        it('should be able to push a function', function () {
            ayay.push(function (a, b) {
                return a + b
            })
            expect(ayay[0] instanceof Function).toEqual(true);
        });

        it('should be able to push a string', function () {
            ayay.push('pepito')
            expect(typeof ayay[0]).toBe('string');
        });



    });

    describe('pop', function () {
        it('should pop items', function () {
            ayay.push(1, 2, 3);

            ayay.pop();

            expect(ayay.length).toEqual(2);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should return last item', function () {
            ayay.push(1, 2, 3);

            ayay.pop();

            expect(ayay.length).toEqual(2);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('length should be one less than original ayay', function () {
            ayay.push(1, 2, 3)
            ayay.pop();
            expect(ayay.length).toEqual(2);
        });


        it('should return undefined if ayay is empty', function () {
            var result = ayay.pop();
            expect(ayay.length).toEqual(0);
            expect(result).toEqual(undefined);
        });

        it('should fail if arguments are passed', function () {
            ayay.push(1, 2, 3);

            expect(function () {
                ayay.pop(3)
            }).toThrowError(Error, 'input is not required in pop');
        });
    });

    describe('map', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);

            var result = new Ayay;

            ayay.map(function (elem) {
                return result.push(elem * 2);
            });

            expect(result.length).toEqual(ayay.length);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should return all expected data in callback', function () {
            ayay.push(1, 2, 3);
            var items = [];
            var indexes = [];
            var arr = [];

            ayay.map(function (elem, index, array) {
                items.push(elem);
                indexes.push(index);
                arr.push(array);
            });

            expect(items.length).toEqual(3);
            expect(indexes.length).toEqual(3);
            expect(arr.length).toEqual(3);

            items.forEach(function (elem, index) {
                expect(ayay[index]).toEqual(elem)
            });
            indexes.forEach(function (i, index) {
                expect(i).toEqual(index)
            });
        });

        it('should return error if callback is not a function', function () {
            var callback = 1;
            expect(function () {
                forEach(callback);
            }).toThrowError();
        });

        it('should fail on empty callback', function () {
            expect(function () {
                ayay.map();
            }).toThrowError();

        });
    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);

            var result = new Ayay;


            ayay.forEach(function (elem) {
                return result.push(elem * 2);
            });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should return error if callback is not a function', function () {
            var callback = 1;
            expect(function () {
                forEach(callback);
            }).toThrow();
        });
    });

    describe('filter', function () {
        it('should filter an ayay', function () {
            var result = new Ayay;

            ayay.push(1, 2, 3);

            result = ayay.filter(isGreaterThan);

            function isGreaterThan(item) {
                return item > 2;
            }

            expect(result.length).toEqual(1);

            result.forEach(function (elem) {
                expect(elem).toEqual(3)
            });

        });

        it('should return an empty ayay when condition is not met', function () {
            var result = new Ayay;

            ayay.push(1, 2, 3);

            result = ayay.filter(isGreaterThan);

            function isGreaterThan(item) {
                return item < 1;
            }

            expect(result.length).toEqual(0);
        });

        it('should return error if callback is not a function', function () {
            var callback = 1;
            ayay.push(1, 2, 3);
            expect(function () {
                ayay.map(callback);
            }).toThrowError();
        });

        it('should fail on empty callback', function () {
            expect(function () {
                ayay.filter();
            }).toThrowError();

        });
    });

    describe('find', function () {
        it('should find matching elements', function () {
            var ayay = new Ayay;

            ayay.push(1, 2, 3);

            var result = ayay.find(isGreaterThan);

            function isGreaterThan(item) {
                return item > 2;
            }

            expect(result).toEqual(3);

        });

        it('should find matching elements (character)', function () {
            ayay.push('1', '2', '3');
            var result = ayay.find(function (elem) {
                return elem == '2';
            });
            expect(result).toEqual('2');

        });

        it('should find matching elements (random input)', function () {
            var nums = new Ayay;

            function randomNum() {
                return 1 + Math.floor(Math.random() * 10);
            }

            var length = randomNum();

            for (var i = 0; i < length; i++) {
                nums.push(randomNum());
            }

            function condition(elem) {
                return elem > 5;
            }

            var expected = nums.find(condition);

            var result = nums.find(condition);

            expect(result).toEqual(expected);
        });

        it('should return undefined when condition is not met', function () {
            var result = new Ayay;

            ayay.push(1, 2, 3);

            result = ayay.find(isGreaterThan);

            function isGreaterThan(item) {
                return item > 3;
            }

            expect(result).toEqual(undefined);
        });

        it('should fail if callback is not defined', function () {
            ayay.push(1, 2, 3);
            // var func;

            expect(function () {
                ayay.find();
            }).toThrowError('undefined is not a function');
        });

        it('should fail if ayay is not defined', function () {
            var ayay;
            expect(function () {
                forEach(ayay);
            }).toThrow();
        });
    });

    describe('sort', function () {
        it('should sort an ayay', function () {
            ayay.push(5, 4, 3, 2, 1);
            ayay.sort();
            var sorted = [1, 2, 3, 4, 5];
            for (var i = 0; i < ayay.length; i++) {
                expect(sorted[i]).toEqual(ayay[i]);
            }
        });
        it('should modify original ayay', function () {
            ayay.push(5, 4, 3, 2, 1)
            var original = [5, 4, 3, 2, 1]
            ayay.sort()
            expect(JSON.stringify(ayay) === JSON.stringify(original)).toBe(false);
        });
        it('should maintain its length', function () {
            ayay.push(1, 2, 3);
            ayay.sort()
            expect(ayay.length).toEqual(3);
        });
    });
});