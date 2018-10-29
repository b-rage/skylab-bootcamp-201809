// TODO ...

describe('logic', function () {
    describe('call', function () {
        it('should succeed on correct data', function (done) {
            logic.call('/search/all?q=mahou',
                function (message) {
                    expect(message[0].id).toEqual("8OucfG");
                    done();
                },
                []
            );
        });
    });
});

    //     it('should fail on undefined name', function () {
    //         logic.register(undefined, 'Doe', 'jd', '123',
    //             function () {
    //                 throw Error();
    //             },
    //             function (message) {
    //                 expect(message).toEqual('invalid name');
    //             }
    //         );
    //     });

    //     it('should fail on null name', function () {
    //         logic.register(null, 'Doe', 'jd', '123',
    //             function () {
    //                 throw Error();
    //             },
    //             function (message) {
    //                 expect(message).toEqual('invalid name');
    //             }
    //         );
    //     });

    //     it('should fail on empty name', function () {
    //         logic.register('', 'Doe', 'jd', '123',
    //             function () {
    //                 throw Error();
    //             },
    //             function (message) {
    //                 expect(message).toEqual('invalid name');
    //             }
    //         );
    //     });

    //     it('should fail on blank name', function () {
    //         logic.register('    \t\n', 'Doe', 'jd', '123',
    //             function () {
    //                 throw Error();
    //             },
    //             function (message) {
    //                 expect(message).toEqual('invalid name');
    //             }
    //         );
    //     });

    //     it('should fail on non-string name (object)', function () {
    //         logic.register({}, 'Doe', 'jd', '123',
    //             function () {
    //                 throw Error();
    //             },
    //             function (message) {
    //                 expect(message).toEqual('invalid name');
    //             }
    //         );
    //     });

    //     it('should fail on non-string name (number)', function () {
    //         logic.register(123, 'Doe', 'jd', '123',
    //             function () {
    //                 throw Error();
    //             },
    //             function (message) {
    //                 expect(message).toEqual('invalid name');
    //             }
    //         );
    //     });

    //     it('should fail on non-string name (boolean)', function () {
    //         logic.register(true, 'Doe', 'jd', '123',
    //             function () {
    //                 throw Error();
    //             },
    //             function (message) {
    //                 expect(message).toEqual('invalid name');
    //             }
    //         );
    //     });

    //     // TODO apply analog cases for: surname, username, and password

    //     it('should throw error on undefined success callback', function () {
    //         expect(function () {
    //             logic.register('John', 'Doe', 'jd', '123',
    //                 undefined,
    //                 function (message) {
    //                     throw Error(message); // new Error(message);
    //                 }
    //             );
    //         }).toThrowError(TypeError, 'undefined is not a function');
    //     });

    //     it('should throw error on null success callback', function () {
    //         expect(function () {
    //             logic.register('John', 'Doe', 'jd', '123',
    //                 null,
    //                 function (message) {
    //                     throw Error(message); // new Error(message);
    //                 }
    //             );
    //         }).toThrowError(TypeError, 'null is not a function');
    //     });

    //     it('should throw error on non-function success callback (string)', function () {
    //         expect(function () {
    //             logic.register('John', 'Doe', 'jd', '123',
    //                 '',
    //                 function (message) {
    //                     throw Error(message); // new Error(message);
    //                 }
    //             );
    //         }).toThrowError(TypeError, ' is not a function');
    //     });

    //     it('should throw error on non-function success callback (boolean)', function () {
    //         expect(function () {
    //             logic.register('John', 'Doe', 'jd', '123',
    //                 true,
    //                 function (message) {
    //                     throw Error(message); // new Error(message);
    //                 }
    //             );
    //         }).toThrowError(TypeError, 'true is not a function');
    //     });

    //     // TODO implement analog cases for fail callback

    //     // afterEach(function() {
    //     //     user = undefined;
    //     // });
    // });

    // describe('login', function() {
    //     beforeEach(function() {
    //         user = {
    //             name: 'John',
    //             surname: 'Doe',
    //             username: 'jd',
    //             password: '123'
    //         };
    //     });

    //     it('should succeed on correct credentials', function() {
    //         logic.login('jd', '123',
    //             function(user) {
    //                 expect(user).toBeDefined();
    //                 expect(user.name).toEqual('John');
    //                 expect(user.surname).toEqual('Doe');
    //                 expect(user.username).toEqual('jd');
    //                 expect(user.password).not.toBeDefined();
    //             },
    //             function(message) {
    //                 throw Error(message);
    //             }
    //         );
    //     });

    //     it('should fail on wrong username', function() {
    //         logic.login('jd-', '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('wrong credentials');
    //             }
    //         );
    //     });

    //     it('should fail on wrong password', function() {
    //         logic.login('jd', '123-',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('wrong credentials');
    //             }
    //         );
    //     });

    //     it('should fail on undefined username', function() {
    //         logic.login(undefined, '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('invalid username');
    //             }
    //         );
    //     });

    //     it('should fail on null username', function() {
    //         logic.login(null, '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('invalid username');
    //             }
    //         );
    //     });

    //     it('should fail on empty username', function() {
    //         logic.login('', '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('invalid username');
    //             }
    //         );
    //     });

    //     it('should fail on blank username', function() {
    //         logic.login('       \t\n', '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('invalid username');
    //             }
    //         );
    //     });

    //     it('should fail on non-string username (object)', function() {
    //         logic.login({}, '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('invalid username');
    //             }
    //         );
    //     });

    //     it('should fail on non-string username (numeric)', function() {
    //         logic.login(123, '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('invalid username');
    //             }
    //         );
    //     });

    //     it('should fail on non-string username (boolean)', function() {
    //         logic.login(true, '123',
    //             function() {
    //                 throw Error();
    //             },
    //             function(message) {
    //                 expect(message).toEqual('invalid username');
    //             }
    //         );
    //     });

    //     // TODO implement analog cases for password

    //     it('should throw error on undefined success callback', function () {
    //         expect(function () {
    //             logic.login('John', 'Doe',
    //                 undefined,
    //                 function (message) {
    //                     throw Error(message);
    //                 }
    //             );
    //         }).toThrowError(TypeError, 'undefined is not a function');
    //     });

    //     // TODO end other cases for success callback

    //     // TODO implement analog cases for fail callback
    // });
