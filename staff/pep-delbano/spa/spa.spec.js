describe('logic', function() {
    describe('register', function() {
        it('should succeed on correct data', function() {
            logic.register('john', 'billy', 'jd', '123', '123')
            function() {
                expect(user.name).toEqual('john');
                expect(user.lname).toEqual('billy');
                expect(user.usern).toEqual('jd');
                expect(user.pass).toEqual('123');
                expect(user.confirmpass).toEqual('123');

            },
            function() {
                throw Error(message); //we throw error sa it doesn't need to pass to this option, as the form is correct
            }
        })


        it('should fail on blank first name', function() {
            logic.register('', 'billy', 'jd', '123', '123')
            function() {
                throw Error();

            },
            function() {
                expect(message).toEqual('invalid first name');
            }
        })





        // it('should fail on blank last name', function() {
        //     logic.register('john', 'billy', 'jd', '123', '123')
        //     function() {
        //         expect(user.name).toEqual('john');
        //         expect(user.lname).toEqual('billy');
        //         expect(user.usern).toEqual('jd');
        //         expect(user.pass).toEqual('123');
        //         expect(user.confirmpass).toEqual('123');

        //     },
        //     function() {
        //         throw Error(message); //we throw error sa it doesn't need to pass to this option, as the form is correct
        //     }
        // })

        // it('should succeed on correct data', function() {
        //     logic.register('john', 'billy', 'jd', '123', '123')
        //     function() {
        //         expect(user.name).toEqual('john');
        //         expect(user.lname).toEqual('billy');
        //         expect(user.usern).toEqual('jd');
        //         expect(user.pass).toEqual('123');
        //         expect(user.confirmpass).toEqual('123');

        //     },
        //     function() {
        //         throw Error(message); //we throw error sa it doesn't need to pass to this option, as the form is correct
        //     }
        // })
    })
})