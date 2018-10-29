describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should push items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });
        it('should push more than one item at once', function () {
            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });
        it('should push more than one item at once (chars)', function () {
            ayay.push('a', 'b', 'c');
            var ex = ['a', 'b', 'c'];
            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++) expect(ayay[i]).toEqual(ex[i]);
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
        it('should fail on non valid callback', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var callback = undefined;
            expect(function() {ayay.forEach(callback);}).toThrowError(TypeError, callback + ' is not a function')
        
        });
        it('should fail on empty array', function () {
            expect(function() {ayay.forEach();}).toThrowError('array can not be empty')
        });
    });
    describe('pop', function () {
        it('should succesfully remove last item', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var ex = [1,2];
            ayay.pop();
            expect(ayay.length).toEqual(2);
            for (var i = 0; i<ayay.length; i++)
                expect(ayay[i]).toEqual(ex[i]);
                       
            
        });
        it('should succesfully return the removed item', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var last = ayay[ayay.length-1];
            var result = ayay.pop();
            
            expect(ayay.length).toEqual(2);
            expect(result).toEqual(last);
            
        });
        it('should fail on empty array', function () {
            expect(function() {ayay.pop();}).toThrowError('array can not be empty')
        
        });

    });
    describe('map', function () {
        it('should succeed on iterating an array and multiply by 2', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = ayay.map(function(elem, i){return elem * 2});
            var comprovation = [2,4,6];

            expect(result).toBeTruthy();

            for(var i = 0; i<ayay.length; i++){
                expect(result[i]).toEqual(comprovation[i]);
            }

            expect(result.length).toEqual(ayay.length);
            
        });
        it('should fail on non valid callback', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var callback = undefined;
            expect(function() {ayay.map(callback);}).toThrowError(TypeError, callback + ' is not a function')
        
        });
        it('should fail on empty array', function () {
            expect(function() {ayay.map();}).toThrowError('array can not be empty')
        
        });
    });
    describe('filter', function () {
        it('should succeed on returning an array with the elements that pass the callback requirement', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);


            var result = ayay.filter(function(elem, i){return elem > 2});
            var comprovation = [3];
            expect(result).toBeTruthy();

            for(var i = 0; i<ayay.length; i++){
                expect(result[i]).toEqual(comprovation[i]);
            }

            expect(result.length).toEqual(comprovation.length);
            
        });
        it('should fail on non valid callback', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var callback = 1;
            expect(function() {ayay.filter(callback);}).toThrowError(TypeError, callback + ' is not a function')
        
        });
        it('should fail on empty array', function () {
            expect(function() {ayay.filter();}).toThrowError('array can not be empty')
        
        });
    });

    describe('find', function () {
        it('should succeed on returning the first element that pass the callback requirement', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);


            var result = ayay.find(function(elem){return elem > 1});
            var comprovation = 2;
            expect(result).toBeTruthy();

            expect(result).toEqual(comprovation);

            expect(result.length).toEqual(comprovation.length);
            
        });
        it('should fail on non valid callback', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var callback = 1;
            expect(function() {ayay.find(callback);}).toThrowError(TypeError, callback + ' is not a function')
        
        });
        it('should fail on empty array', function () {
            expect(function() {ayay.find();}).toThrowError('array can not be empty')
        
        });
    });

    describe('sort', function () {
        it('should succeed on sorting the elements of the array', function () {
            ayay.push(1);
            ayay.push(3);
            ayay.push(2);


            var result = ayay.sort();
            var comprovation = [1,2,3];
            expect(result).toBeTruthy();

            for(var i = 0; i<ayay.length; i++){
                expect(result[i]).toEqual(comprovation[i]);
            }
            expect(result.length).toEqual(comprovation.length);
            
        });
        it('should succeed on sorting the elements of the array(chars)', function () {
            ayay.push('b', 'c', 'a');

            var result = ayay.sort();
            var comprovation = ['a', 'b', 'c'];
            expect(result).toBeTruthy();

            for(var i = 0; i<ayay.length; i++){
                expect(result[i]).toEqual(comprovation[i]);
            }
            expect(result.length).toEqual(comprovation.length);
            
        });
        it('should fail on empty array', function () {
            expect(function() {ayay.sort();}).toThrowError('array can not be empty')
        
        });
    });
});