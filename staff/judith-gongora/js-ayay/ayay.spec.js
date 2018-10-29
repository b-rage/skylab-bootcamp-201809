describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should push items', function () {
            var length;

            ayay.push(1);
            ayay.push(2);
            length = ayay.push(3);

            expect(ayay.length).toEqual(length);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });
    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });
        
        it('should throw an exception if callback is not a function', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            
            var error;
            var p = 0;
            
            expect(function() {ayay.forEach(p);}).toThrowError(TypeError, p + ' is not a function')
        });  
    });

    describe('pop', function () {
        it('should pop the last value on valid ayay', function () {
    
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
    
            var length = ayay.length;
            var last = ayay[ayay.length-1];
            var result;
            
            result = ayay.pop();
    
            expect(length).not.toEqual(ayay.length);
            expect(last).toEqual(result);
    
        });  
    });

    describe('map', function () {
        it('should pop the last value on valid ayay', function () {
    
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = ayay.map(function(elem) { return elem * 2;});
            
            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        }); 
        
        it('should throw an exception if callback is not a function', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            
            var p = 0;
            
            expect(function() {ayay.map(p);}).toThrowError(TypeError, p + ' is not a function')
        });  
    });

    describe('filter', function () {
        it('should filter the elemnts in the ayay with the condition declarated', function () {
    
            ayay.push(8);
            ayay.push(2);
            ayay.push(7);

            var result = ayay.filter(function (elem) { return elem > 6;});

            result.forEach(function (elem) {
                expect(elem > 6).toBeTruthy();
            });
        }); 
        
        it('should throw an exception if callback is not a function', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var p = 0;
            
            expect(function() {ayay.filter(p);}).toThrowError(TypeError, p + ' is not a function')
        });
    });

    describe('find', function () {
        it('should find the element with the condition declarated', function () {
    
            ayay.push(8);
            ayay.push(2);
            ayay.push(3);

            var result = ayay.find(function (elem) { return elem < 6;});
            expect(result < 6).toBeTruthy();
        });  

        it('should throw an exception if callback is not a function', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            
            var p = 0;
            
            expect(function() {ayay.find(p);}).toThrowError(TypeError, p + ' is not a function')
        });    
    });

    describe('sort', function () {
        it('should sort the elements in sort', function () {
            
            ayay.push(8);
            ayay.push(2);
            ayay.push(9);

            var correct=new Ayay;

            correct.push(2);
            correct.push(8);
            correct.push(9);

            var result = ayay.sort(function (elem) { return elem < 6;});

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem,index) {
                expect(elem).toEqual(correct[index]);  
            });
        });  

        it('should throw an exception if callback is not a function', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            
            var p = 0;
            
            expect(function() {ayay.sort(p);}).toThrowError(TypeError, p + ' is not a function')
        });  
    });

    
});