describe('logic', function () {
    describe('register', function () {
        beforeEach(function() {
            user = undefined;
        });

        it('should succeed on correct data', function () {
            logic.register('John', 'Doe', 'jd', '123',
                function () {
                    expect(user.name).toEqual('John');
                    expect(user.surname).toEqual('Doe');
                    expect(user.username).toEqual('jd');
                    expect(user.password).toEqual('123');
                },
                function (message) {
                    //expect(message).not.toBeDefined();
                    throw Error(message);
                }
            );
        });

        it('should fail on undefined name', function () {
            logic.register(undefined, 'Doe', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid name');
                }
            );
        });
        

        it('should fail on null name', function () {
            logic.register(null, 'Doe', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid name');
                }
            );
        });


        it('should fail on empty name', function () {
            logic.register('', 'Doe', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid name');
                }
            );
        });

        it('should fail on blank name', function () {
            logic.register('    \t\n', 'Doe', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid name');
                }
            );
        });

        it('should fail on non-string name (object)', function () {
            logic.register({}, 'Doe', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid name');
                }
            );
        });

        it('should fail on non-string name (number)', function () {
            logic.register(123, 'Doe', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid name');
                }
            );
        });

        it('should fail on non-string name (boolean)', function () {
            logic.register(true, 'Doe', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid name');
                }
            );
        });

        it('should fail on undefined surname', function () {
            logic.register('John', undefined, 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        });

        it('should fail on null surname', function () {
            logic.register('John', null, 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        });

        it('should fail on empty surname', function () {
            logic.register('John', '', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        });

        it('should fail on blank surname', function () {
            logic.register('John', '    \t\n', 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        });

        it('should fail on non-string surname (object)', function () {
            logic.register('John', {}, 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        });

        it('should fail on non-string surname (number)', function () {
            logic.register('John', 123, 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        });

        it('should fail on non-string surname (boolean)', function () {
            logic.register('John', true,'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        });


        it('should fail on undefind username', function(){
            logic.register('John', 'Doe', undefined, '123',
            function(){
                throw Error
            },
            function(message){
                expect(message).toEqual('invalid username')
            }
            );
        });

        it('should fail on null username', function(){
            logic.register('John', 'Doe', null, '123',
                function(){
                    throw Error
                },
                function(message){
                    expect(message).toEqual('invalid username')

                }
            );
        });

        it('should fail on empty username', function(){
            logic.register('John', 'Doe', '   ', '123',
            function(){
                throw Error
            }, function(message){
                expect(message).toEqual('invalid username')
            })
        });


        it('should fail on non-string username (object)', function () {
            logic.register('John', 'Doe', {},  '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (number)', function () {
            logic.register('John', 'Doe', 123, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (boolean)', function () {
            logic.register('John', 'Doe', true,'123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });



        it('should fail on undefind password', function(){
            logic.register('John', 'Doe', 'jd', undefined, 
            function(){
                throw Error
            },
            function(message){
                expect(message).toEqual('invalid password')
            }
            );
        });

        it('should fail on null password', function(){
            logic.register('John', 'Doe', 'jd', null, 
                function(){
                    throw Error
                },
                function(message){
                    expect(message).toEqual('invalid password')

                }
            );
        });

        it('should fail on empty password', function(){
            logic.register('John', 'Doe', 'jd', '   ', 
            function(){
                throw Error
            }, function(message){
                expect(message).toEqual('invalid password')
            })
        });


        it('should fail on non-string password (object)', function () {
            logic.register('John', 'Doe', 'jd', {},  
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (number)', function () {
            logic.register('John', 'Doe', 'jd', 123, 
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (boolean)', function () {
            logic.register('John', 'Doe', 'jd', true,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });


        it('should throw error on undefined success callback', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    undefined,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null success callback', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    null,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on non-function success callback (string)', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    '',
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, ' is not a function');
        });

        it('should throw error on non-function success callback (boolean)', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    true,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'true is not a function');
        });

        it('should throw error on undefined fail callback', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    function (message) {
                        throw Error(message); // new Error(message);
                    }, 
                    undefined
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null fail callback', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    function (message) {
                        throw Error(message); // new Error(message);
                    },
                    null,
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on non-function fail callback (string)', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    
                    function (message) {
                        throw Error(message); // new Error(message);
                    },
                    ''
                );
            }).toThrowError(TypeError, ' is not a function');
        });

        it('should throw error on non-function fail callback (boolean)', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    
                    function (message) {
                        throw Error(message); // new Error(message);
                    },
                    true
                );
            }).toThrowError(TypeError, 'true is not a function');
        });

        // afterEach(function() {
        //     user = undefined;
        // });
    });

    describe('login', function() {
        beforeEach(function() {
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
                    expect(user.name).toEqual('John');
                    expect(user.surname).toEqual('Doe');
                    expect(user.username).toEqual('jd');
                    expect(user.password).not.toBeDefined();
                },
                function(message) {
                    throw Error(message);
                }
            );
        });

        it('should fail on wrong username', function() {
            logic.login('jd-', '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('wrong credentials!');
                }
            );
        });

        it('should fail on wrong password', function() {
            logic.login('jd', '123-',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('wrong credentials!');
                }
            );
        });

        it('should fail on undefined username', function() {
            logic.login(undefined, '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on null username', function() {
            logic.login(null, '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on empty username', function() {
            logic.login('', '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on blank username', function() {
            logic.login('       \t\n', '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (object)', function() {
            logic.login({}, '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (numeric)', function() {
            logic.login(123, '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (boolean)', function() {
            logic.login(true, '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

    //     // TODO implement analog cases for password

        it('should throw error on undefined success callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    undefined,
                    function (message) {
                        throw Error(message);
                    }
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it ('should fail on non-function success callback(string)', function(){
            var onFail = '123'
            expect(function(){
                logic.login('John', 'Doe',
                function(message){
                    throw Error(message)
                }, onFail
                )
            }).toThrowError(TypeError, onFail + ' is not a function');

        });

    //     // TODO end other cases for success callback


        it('should throw error on undefined fail callback(undefined)', function () {
            var onFail = undefined
            expect(function(){
                logic.login('John', 'Doe',
                function(message) {
                    throw Error(message)
                }, onFail
                )
            }).toThrowError(TypeError, onFail + ' is not a function');
        });

        it('should throw error on non-function fail callback(string)', function () {
            var onFail = '123';
            expect(function(){
                logic.login('John', 'Doe',
                function(message) {
                    throw Error(message)
                }, onFail
                )
            }).toThrowError(TypeError, onFail + ' is not a function');
        });

        it('should throw error on non-function fail callback(boolean)', function () {
            var onFail = true
            expect(function(){
                logic.login('John', 'Doe',
                function(message) {
                    throw Error(message)
                }, onFail
                )
            }).toThrowError(TypeError, onFail + ' is not a function');
        });

        
    //     // TODO implement analog cases for fail callback
     });
});