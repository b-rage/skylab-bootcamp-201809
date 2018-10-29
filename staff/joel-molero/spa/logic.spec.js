describe( 'logic', function() {

	describe('resgister', function() {
	
	it('should succeed on correct data', function () { //empezar for cast positivo
		logic.register('John', 'Doe', 'jd', '123',
			function () {
				expect(user.name).toEqual('John');
                expect(user.surname).toEqual('Doe');
                expect(user.username).toEqual('jd');
                expect(user.password).toEqual('123');
			},
			function (message) {
                //expect(message).not.toBeDefined();
                throw Error(message);  //por si logic.register fallara (mal implementado)
            }
        );
    });

    it('should fail on undefined name', function () { //empezar for cast positivo
		logic.register(undefined, 'Doe', 'jd', '123',
			function () {
				throw Error();
			},
			function (message) {
                expect(message).toEqual('invalid name')
            }
        );
    });

    it('should fail on empty name', function () { 
		logic.register('', 'Doe', 'jd', '123',
			function () {
				throw Error();
			},
			function (message) {
                expect(message).toEqual('invalid name')
            }
        );
    });

    it('should fail on blank name', function () { 
		logic.register('   ', 'Doe', 'jd', '123',
			function () {
				throw Error();
			},
			function (message) {
                expect(message).toEqual('invalid name')
            }
        );
    });

    it('should fail on non-string name (number)', function () { 
		logic.register(14, 'Doe', 'jd', '123',
			function () {
				throw Error();
			},
			function (message) {
                expect(message).toEqual('invalid name')
            }
        );
    });

    it('should fail on non-string name (object)', function () { 
		logic.register(obj={}, 'Doe', 'jd', '123',
			function () {
				throw Error();
			},
			function (message) {
                expect(message).toEqual('invalid name')
            }
        );
    });

    it('should throw error on undefined success callback', function () { 
        expect(function() {
		    logic.register('John', 'Doe', 'jd', '123',
			    undefined,
			    function (message) {
                    throw Error(message);  //espera este error
                }
            );
        }).toThrowError(TypeError, 'undefined is not a function')  //si incluso falla el error cae aqui
    });


	});

	describe('login', function () {
		beforeEach(function () {
			user = {
				name: 'John',
				surname: 'Doe',
				username: 'jd',
				password: '123'
			};
		});

		it('should succeed on correct credentials', function() {
			logic.login('jd', '123',
			function(user) {
				expect(user).toBeDefined();
			});
		})

		it('should fail on empty username', function() {
			logic.login('', '123', 
			function() {
				throw Error();
			},
			function () {
				expect(message).toEqual('invalid username');
			})
		})
	})
});