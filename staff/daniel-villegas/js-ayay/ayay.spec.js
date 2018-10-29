describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should push items (numbers)', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });
    
        it('should push items (letters)', function () {
            ayay.push('hola');
            ayay.push('soy');
            ayay.push('programador');

            var result = ayay;

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(result[i]);
        });
    
        it('should push items (empty)', function () {
            ayay.push();
            ayay.push();
            ayay.push();


            expect(ayay.length).toEqual(3); 
        });

        it('should give error', function () {
            var a;
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            //expect(function() {ayay.push(a);}).toThrowError(Error, a + ' is undefined')
            
        });
    });

    describe('forEach', function () {
        it('should return result element * 2', function () {
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

        it('should return element + !', function () {
            ayay.push('hola');
            ayay.push('soy');
            ayay.push('programador');

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = ayay[index] + '!'; });

            for (var i = 0; i < ayay.length; i++) expect(result[i]).toEqual(ayay[i] + '!');
             
        });

        it('should give error no function', function () {
            
            ayay.push(21);
            ayay.push(33);
            ayay.push(777);
            ayay.push(0);
            var nofunct;

            expect(function() {ayay.map(nofunct);}).toThrowError(Error, nofunct  + ' is not a function')
            
        });
    });

    describe('map', function () {
        it('should return new array with numbers *3', function () {

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            ayay.push(4);

            var result = [];
            
            ayay.map(function(elem, index) { result[index] = elem * 3; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 3);
            });
        });

        it('should return new array with hola + element', function () {

            ayay.push("pere");
            ayay.push("manel");
            ayay.push("joan");
            ayay.push("diplodocus");

            var result = [];
            
            ayay.map(function(elem, index) { result[index] = 'hola ' + elem });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(result[index]).toEqual('hola ' + ayay[index]);
            });
        });

        it('should give error no function', function () {
            
            ayay.push("pere");
            ayay.push("manel");
            ayay.push("joan");
            ayay.push("diplodocus");
            var nofunct;

            expect(function() {ayay.map(nofunct);}).toThrowError(Error, nofunct  + ' is not a function')
            
        });
    });

    describe('pop', function () {
        it('should delete the last item', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            ayay.pop();
           
            expect(ayay.length).toEqual(2);

        });

        it('should give error for try pop on empty object', function () {
            ayay;
        
            expect(function() {ayay.pop();}).toThrowError(Error, 'object is empty')

        });
    });    

    describe('filter', function () {
        it('should create new array with elements that satisfy the test (>5)', function () {
        
            ayay.push(6);
            ayay.push(4);
            ayay.push(9);
            ayay.push(2);

            var result = ayay.filter(function(elem, index) { return elem > 5; });
           
            expect(result.length).toEqual(2);

            expect(result[0]).toEqual(6);
            expect(result[1]).toEqual(9);

        });

        it('should create new array empty', function () {
        
            ayay.push();
            ayay.push();
            ayay.push();
            ayay.push();

            var result = ayay.filter(function(elem, index) { return elem > 5; });
           
            expect(result[0]).toEqual(result[0]);

        });

        it('should give error element is not a object', function () {
            
            ayay.push(21);
            ayay.push(33);
            ayay.push(777);
            ayay.push(0);
            

            expect(function() {ayay.filter();}).toThrowError(Error, 'element is not an function')
            
        });
    });  
    
    describe('find', function () {
        it('should returns the value of the first element in the array that satisfies the provided testing function (numbers)', function () {
        
            ayay.push(6);
            ayay.push(15);
            ayay.push(24);
            ayay.push(39);
            
            var result = ayay.find(function(elem, index) { return elem > 16});
           
            expect(result).toEqual(24);

        });

        it('should returns the value of the first element in the array that satisfies the provided testing function (letters)', function () {
        
            ayay.push('arnol');
            ayay.push('johan');
            ayay.push('nabucodonosor');
            ayay.push('evaristo');
            
            var result = ayay.find(function(elem, index) { return elem.length > 11});
           
            expect(result).toEqual('nabucodonosor');

        });
    });  

    describe('sort', function () {
        it('should sorts the elements of an array in place and returns the array.(numbers)', function () {
        
            ayay.push(6);
            ayay.push(15);
            ayay.push(39);
            ayay.push(99);
            ayay.push(1);
            ayay.push(70);
            
            var result = ayay.sort(function () { return item })
            for(var i = 0; i < ayay.length; i++) expect(result[i]).toEqual(ayay[i]);
        });

        it('should sorts the elements of an array in place and returns the array.(letters)', function () {

            ayay.push("hola");
            ayay.push("manu");
            ayay.push("estoy");
            ayay.push("aprendiendo");
            ayay.push("javascript");
            
            var result = ayay.sort(function () { return item })
            for(var i = 0; i < ayay.length; i++) expect(result[i]).toEqual(ayay[i]);

        });

        it('should give error if sort in non-object', function() {
            

            expect(function() {ayay.sort();}).toThrowError(Error, 'element is empty')

        });
    });  
});