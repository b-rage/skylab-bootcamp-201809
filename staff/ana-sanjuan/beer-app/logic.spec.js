describe('logic', function(){

    describe('http', function(){
        
        it('should succed on retrieveing data from API', function(done){
            var callback = function(beers){
                
                expect(beers[0].name).toEqual('Hola Maria');
                expect(beers[1].name).toEqual('Hola Dali');
                done();
            };
            errorParam = [];
            query = 'hola';
            logic.http('/search/all?q=' + query, callback, errorParam);

        })
    });




})