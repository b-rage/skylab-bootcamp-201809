describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should add items to the provided ayay ', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);


            expect(ayay.length).toEqual(length +3);
            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should add consecutive items to the provided ayay ', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            ayay.push(4, 5, 6);

            expect(ayay.length).toEqual(6);
            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should add an ayay as new element', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var newAyay = new Ayay;
            newAyay.push(4,5,6)

            ayay.push(newAyay);

            expect(ayay.length).toEqual(4);
            for (var i = 0; i < ayay.length -1; i++){
                expect(ayay[i]).toEqual(i + 1);
            }
            expect(ayay[ayay.length -1]).toEqual(newAyay);
        });

        it('should return the length of the modified ayay ', function () {
           
            var result; 
            result =  ayay.push(1, 2, 3);
            
            expect(ayay.length).toEqual(3);
            expect(result).toEqual(ayay.length);
            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        // Unnecesary test: it is not possible to call ayay.push method on non-ayay

        // it('should fail when applied to non-ayays ', function () {
           
        //     var notAyay = 1; 

        //     expect(function() {notAyay.push(9);}).toThrowError(TypeError, 'push can not be applied to this element')
        //    // expect(function() {ayay.forEach(p);}).toThrowError( TypeError, p + ' is not a function');
        // });

    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);
            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);
            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should fail on non-function callback', function () {
            ayay.push(1, 2, 3);
            var callback = 1;

            expect(function() {ayay.forEach(callback);}).toThrowError( TypeError, callback + ' is not a function');
        });

        it('should succeed on iterating an array and passing all specified data to callback', function () {
            ayay.push(1, 2, 3);

            var elements = [];
            var indexes = [];
            var arrays = [];
        
            ayay.forEach(function (element, index, array) {
                elements.push(element);
                indexes.push(index);
                arrays.push(array);
            });
        
            expect(elements).toBeTruthy();
            expect(indexes).toBeTruthy();
            expect(arrays).toBeTruthy();

            elements.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index])      
            });
            indexes.forEach(function (i, index) {
                expect(i).toEqual(index)      
            });
            arrays.forEach(function(array, index) {
                expect(array).toEqual(arrays[index])
            });
        });

    });


    describe('pop', function () {
        it('should return last item and exclude it from array', function () {
            ayay.push(1, 2, 3);
            var last = ayay[ayay.length-1];
            var length = ayay.length;
            var result;

            result = ayay.pop();

            expect(result).toBeTruthy();
            expect(result).toEqual(last);
            expect(ayay.length).toEqual(length-1);
        });

        it('should return element from array with length 1', function () {
            ayay.push(1);
            var result;

            result = ayay.pop();

            expect(result).toBeTruthy();
            expect(result).toEqual(1);
            expect(ayay.length).toEqual(0);
        });

        it('should return undefined when ayay is empty', function () {
            var result;

            result = ayay.pop();

            expect(result).toBeFalsy();
            expect(result).toEqual(undefined);
            expect(ayay.length).toEqual(0);
        });

        

    });

    describe('map', function () {
        it('should iterate through the elements of the array and return the elements modified by the callback in new array', function () {
            ayay.push(1, 2, 3);
            var result;
            var callback = function(elem) { return elem * 2 }
            var validate = [2,4,6]

            result = ayay.map(callback);
            
            expect(result).toBeTruthy();
            expect(ayay.length).toEqual(result.length);
            for (var i = 0; i < ayay.length; i++){
                expect(result[i]).toEqual(validate[i]);
            }
        });

        it('should fail on non-function callback', function () {
            ayay.push(1, 2, 3);
            var callback = 1;

            expect(function() {ayay.map(callback);}).toThrowError( TypeError, callback + ' is not a function');

        });

        it('should succeed on iterating an array and passing all specified data to callback', function () {
            ayay.push(1, 2, 3);

            var elements = [];
            var indexes = [];
            var arrays = [];
            ayay.map(function (element, index, array) {
                elements.push(element);
                indexes.push(index);
                arrays.push(array);
            });
        
            expect(elements).toBeTruthy();
            expect(indexes).toBeTruthy();
            expect(arrays).toBeTruthy();
        
            elements.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index])      
            });
            indexes.forEach(function (i, index) {
                expect(i).toEqual(index)      
            });
            arrays.forEach(function(array, index) {
                expect(array).toEqual(arrays[index])
            });
        });


    });

    describe('sort', function () {
        it('should modify original array', function () {
            ayay.push(2,3,1,0);
            var lengthBefore = ayay.length;
            var validate = new Ayay
            validate.push(0, 1, 2, 3);

            ayay.sort();
            var lengthAfter = ayay.length;

            expect(lengthBefore).toEqual(lengthAfter); 
            for (var i = 0; i < ayay.length; i++){
                expect(validate[i]).toEqual(ayay[i]);
            }
        });
        it('should sort elements in original array(numbers)', function () {
            ayay.push(2,3,1,0);
            var validate = new Ayay
            validate.push(0, 1, 2, 3);

            ayay.sort();
            
            expect(ayay.length).toEqual(validate.length); 
            for (var i = 0; i < ayay.length; i++){
                expect(validate[i]).toEqual(ayay[i]);
            }
        });

        it('should sort elements in original array(strings)', function () {
            ayay.push('March', 'Jan', 'Feb', 'Dec');
            var validate = new Ayay;
            validate.push("Dec", "Feb", "Jan", "March");
           
            ayay.sort();
            
            expect(ayay.length).toEqual(validate.length); 
            for (var i = 0; i < ayay.length; i++){
                expect(validate[i]).toEqual(ayay[i]);
            }
        });
    });


    describe('filter', function () {
        it('should returns the items of the array that satifies the callback condition(numbers) ', function () {
            ayay.push(1, 2, 3, 4);
            var result;
            var callback = function(elem) { return elem > 2 }
            var validate =[3, 4];

            result = ayay.filter(callback);
            
            expect(result).toBeTruthy();
            result.forEach(function(elem, index) {
                expect(elem).toEqual(validate[index]); 

            });
        });

        it('should returns the items of the array that satifies the callback condition(string) ', function () {
            ayay.push('spray', 'limit', 'elite', 'exuberant', 'construction', 'present');
            var result;
            var callback = function(elem) { return elem.length > 6; }
            var validate = ["exuberant", "construction", "present"];

            result = ayay.filter(callback);
            
            expect(result).toBeTruthy();
            result.forEach(function(elem, index) {
                expect(elem).toEqual(validate[index]); 
            });
        });

        it('should fail on non-functoin callback', function(){
            ayay.push(1, 2, 3, 4);
            var callback = 1;
                   
            expect(function() {ayay.filter(callback);}).toThrowError( TypeError, callback + ' is not a function');
        });
    });

    describe('find', function () {
        it('should return the first element that satisfais the callback condition(numbers)', function () {
            ayay.push(1, 2, 3);
            var result;
            var callback = function(elem) { return elem > 2 }
            var validate = 3;
            
            result = ayay.find(callback);

            expect(result).toBeTruthy();
            expect(result).toEqual(validate); 
            expect(ayay.length).toBeTruthy(1);
        });

        it('should return the first element that satisfais the callback condition(string)', function () {
            ayay.push('spray', 'limit', 'elite', 'exuberant', 'construction', 'present');
            var result;
            var callback = function(elem) { return elem.length > 6; }
            var validate = "exuberant";

            result = ayay.find(callback);
            
            expect(result).toBeTruthy();
            expect(result).toEqual(validate); 
        });

        it('should fail on non-functoin callback', function(){
            ayay.push(1, 2, 3, 4);
            var result;
            var callback = 1;
                   
            expect(function() {ayay.find(callback);}).toThrowError( TypeError, callback + ' is not a function');
        });
    });
});
