describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
        
    });

    describe('push', function () {
        it('should push one item', function () {
            ayay.push(1);

            expect(ayay.length).toEqual(1);
            expect(ayay[0]).toEqual(1);
        }); 
        
        it('should push more than one element', function () {
            
            var ayay = new Ayay;
            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);
        
            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
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

        it('should be able to push a number', function () {
            ayay.push(10)
            expect(typeof ayay[0]).toBe('number');
        });

        it('should be able to push a boolean', function () {
            ayay.push(true)
            expect(typeof ayay[0]).toBe('boolean');
        });

        it('should be able to push an object', function () {
            var o = {}
            ayay.push(o)
            expect(typeof ayay[0]).toBe('object');
        });

        it('should return the new length of ayay', function () {
            
            var ayay = new Ayay;
            var newLength;
            
            newLength = ayay.push(1, 2, 3, 4);
            
            expect(newLength).toEqual(4);
        });
    });

    
    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should keep same length', function () {
            ayay.push(1, 2, 3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);
            
        });

        it('should fail on non-function callback', function () {
            
            var nonFunction;
            ayay.push(1, 2, 3);

            //Cuando tenga que fallar, encerrar la orden en un expect (try-catch!)
            expect(function() { ayay.forEach(nonFunction); }).toThrowError(Error, nonFunction + ' is not a function');

        });
        
    });

    describe('pop', function () {
        it('should pop items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var lastItem = ayay.pop();

            expect(ayay.length).toEqual(2);
        });

        it('should return last element of ayay', function () {
            var elementTest = 3;
            var lastItem;

            ayay.push(1);
            ayay.push(2);
            ayay.push(elementTest);
            lastItem = ayay.pop();
        
            expect(lastItem).toEqual(elementTest);
        });

        it('should reduce length by one unit', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var lastItem = ayay.pop();

            expect(ayay.length).toEqual(2);
        });
    });

    describe('map', function () {
        it('should map items', function () {
            //var result = new Ayay;
            var result = [];

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            
            ayay.map(function (element, index) {
                result[index] = element*2;
                //result.map(element * 2);
            });

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('result should have same length as original ayay', function () {

            var result = [];
            ayay.push(1, 2, 3);

            ayay.map(function (element, index) {
                result[index] = element*2;
            });
            
            expect(result.length).toEqual(ayay.length);

        });

        it('should fail on non-function callback', function () {
            
            var nonFunction;
            ayay.push(1, 2, 3);

            //Cuando tenga que fallar, encerrar la orden en un expect (try-catch!)
            expect(function() { ayay.forEach(nonFunction); }).toThrowError(Error, nonFunction + ' is not a function');

        });

        it('ayay should not be modified', function () {
            
            var result = [];
            ayay.push(1, 2, 3);
            ayay.map(function (element, index) {
                result[index] = element*2;
            });

            expect(ayay[0]).toEqual(1);
            expect(ayay[1]).toEqual(2);
            expect(ayay[2]).toEqual(3);

        });

    });

    describe('sort', function () {
        it('should sort numbers on array', function () {
            
            ayay.push(1);
            ayay.push(30);
            ayay.push(4);
            ayay.push(21);
            
            ayay.sort();
            
            expect(ayay.length).toEqual(4);
            expect(ayay[0]).toEqual(1);
            expect(ayay[1]).toEqual(21);
            expect(ayay[2]).toEqual(30);
            expect(ayay[3]).toEqual(4);
        });

        it('should sort strings on array', function () {
            
            ayay.push('a');
            ayay.push('z');
            ayay.push('h');
            ayay.push('f');
            
            ayay.sort();
            
            expect(ayay.length).toEqual(4);
            expect(ayay[0]).toEqual('a');
            expect(ayay[1]).toEqual('f');
            expect(ayay[2]).toEqual('h');
            expect(ayay[3]).toEqual('z');
        });

    });

    describe('filter', function () {
        it('should filter items', function () {
            var result = new Ayay;

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
                  
            result = ayay.filter(isGreaterThan);
            function isGreaterThan(item) {
                return item > 2
            }

            expect(result.length).toEqual(1);

            result.forEach(function (elem, index) {
                expect(elem).toBeGreaterThan(2);
            });
            
        });

        it('should fail on non-function callback', function () {
            
            var nonFunction;
            ayay.push(1, 2, 3);

            //Cuando tenga que falla, encerrar la orden en un expect (try-catch!)
            expect(function() { ayay.forEach(nonFunction); }).toThrowError(Error, nonFunction + ' is not a function');

        });
        
    });

    describe('find', function () {
                
        it('should return first item that complies with callback', function () {
            var result;

            ayay.push(1, 2, 3, 4);
            
            result = ayay.find(function (item) { return item > 2; });

            expect(result).toBe(3);
            
        });

        it('should work if callback involves working with a number', function () {
            var result;

            ayay.push(1);
            ayay.push(2);
            ayay.push(4);
            ayay.push(2);
                  
            result = ayay.find(function(item) { return item > 2});

            expect(result).toBe(4);
            
        });

        it('should work if callback involves working with a string', function () {
            var result;

            ayay.push('hello', 'world', 'argentina');
                  
            result = ayay.find(function(item) { return item.length > 5; });

            expect(result).toBe('argentina');
            
        });


        it('should return undefined if it does not find an item that complies with callback', function () {
            var result;

            ayay.push('hello', 'world', 'hello');
                  
            result = ayay.find(function(item) { return item.length > 8});

            expect(result).toBe(undefined);
            
        });

        it('should fail on non-function callback', function () {
            
            var nonFunction;
            ayay.push(1, 2, 3);

            expect(function() { ayay.find(nonFunction); }).toThrowError(Error, nonFunction + ' is not a function');

        });

    });

});