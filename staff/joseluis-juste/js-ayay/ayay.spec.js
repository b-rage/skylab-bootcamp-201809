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

            expect(ayay.push).toThrow(new Error("you are trying to push an undefined value"));

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

            expect(ayay.forEach).toThrow(new Error("undefined is not a function"));
        });
    });

    describe('pop', function () {
        it('should delete last element on a valid ayay', function () {
            var lastElem;
            var returned;
            var oldLength;

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            
            oldLength = ayay.length;
            lastElem = ayay[ayay.length-1];
            returned = ayay.pop();

            expect(returned).toEqual(lastElem);
            expect(ayay.length).toEqual(oldLength - 1);
            ayay = new Ayay();
            returned = ayay.pop();

            expect(returned).toEqual(undefined);
           
        });
    });

    describe('map', function () {
        it('should iterate on valid mapped ayay', function () {
            
            var result = [];

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            result = ayay.map(function (elem, index) { 
                
                return elem * 2;
            
            });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });

            ayay = new Ayay();

            expect(ayay.length).toEqual(0);

            expect(ayay.map).toThrow(new Error("undefined is not a function"));

           
        });
    });

    describe('filter', function () {
        it('should filter an ayay correctly', function () {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

           var result = ayay.filter(function (elem, index) { 
                
                return elem >= 2;
            
            });

            expect(result.length).toEqual(2);

            result = ayay.filter(function (elem, index) { 
                
                return elem > 3;
            
            });

            expect(result.length).toEqual(0);

            expect(ayay.filter).toThrow(new Error("undefined is not a function"));
          
        });
    });

    describe('find', function () {
        it('should find element in ayay correctly', function () {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

           var result = ayay.find(function (elem, index) { 
                
                return elem === 2;
            
            });

            expect(result).toEqual(2);

             result = ayay.find(function (elem, index) { 
                
                return elem === 5;
            
            });

            expect(result).toEqual(undefined);

            ayay = new Ayay();

            result = ayay.find(function (elem, index) { 
                
                return elem === 2;
            
            });

            expect(result).toEqual(undefined);

            expect(ayay.filter).toThrow(new Error("undefined is not a function"));
          
        });
    });

    describe('sort', function () {
        it('should sort elements in ayay correctly', function () {
            
            var result = [];

            ayay.push(3);
            ayay.push(2);
            ayay.push(2);
            ayay.push(2);
            ayay.push(1);

            ayay.sort();

            ayay.forEach(function (elem, index) { 
                
                result.push(elem);
            
            });
            
            expect(result.length).toEqual(5);

            for(var i = 0; i < result.length; i++){
                
                expect(result[0]).toEqual(1);
                expect(result[1]).toEqual(2);
                expect(result[2]).toEqual(2);
                expect(result[3]).toEqual(2);
                expect(result[4]).toEqual(3);
            }


            ayay = new Ayay();
            ayay.push(3);
            ayay.sort();
            expect(ayay.length).toEqual(1);
          
        });
    });

});