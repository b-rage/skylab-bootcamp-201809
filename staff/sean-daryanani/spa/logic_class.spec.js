describe('logic', function () {
    describe('register', function () {
        beforeEach(function () {
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
            logic.register('John', '         ', 'jd', '123',
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
            logic.register('John', true, 'jd', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid surname');
                }
            );
        })

        it('should fail on undefined username', function () {
            logic.register('John', 'jd', undefined, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on null username', function () {
            logic.register('John', 'jd', null, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on empty username', function () {
            logic.register('John', 'jd', '', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on blank username', function () {
            logic.register('John', 'jd', '         ', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (object)', function () {
            logic.register('John', 'jd', {}, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (number)', function () {
            logic.register('John', 'jd', 123, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (boolean)', function () {
            logic.register('John', 'jd', true, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );

        });

        it('should fail on undefined password', function () {
            logic.register('John', 'jd', '123', undefined,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on null password', function () {
            logic.register('John', 'jd', '123', null,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on empty password', function () {
            logic.register('John', 'jd', '123', '',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on blank password', function () {
            logic.register('John', 'jd', '123', '         ',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (object)', function () {
            logic.register('John', 'jd', '123', {},
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (number)', function () {
            logic.register('John', 'jd', '123', 123,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (boolean)', function () {
            logic.register('John', 'jd', '123', true,
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
                        throw Error(message);
                    },
                    undefined
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null fail callback', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    function (message) {
                        throw Error(message);
                    },
                    null
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on non-function fail callback (string)', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    function (message) {
                        throw Error(message);
                    },
                    'test'
                );
            }).toThrowError(TypeError, 'test is not a function');
        });

        it('should throw error on non-function fail callback (boolean)', function () {
            expect(function () {
                logic.register('John', 'Doe', 'jd', '123',
                    function (message) {
                        throw Error(message);
                    },
                    true
                );
            }).toThrowError(TypeError, 'true is not a function');
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

        it('should succeed on correct credentials', function () {
            logic.login('jd', '123',
                function (user) {
                    expect(user).toBeDefined();
                    expect(user.name).toEqual('John');
                    expect(user.surname).toEqual('Doe');
                    expect(user.username).toEqual('jd');
                    expect(user.password).not.toBeDefined();
                },
                function (message) {
                    throw Error(message);
                }
            );
        });

        it('should fail on wrong username', function () {
            logic.login('jd-', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('wrong credentials');
                }
            );
        });

        it('should fail on wrong password', function () {
            logic.login('jd', '123-',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('wrong credentials');
                }
            );
        });

        it('should fail on undefined username', function () {
            logic.login(undefined, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on null username', function () {
            logic.login(null, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on empty username', function () {
            logic.login('', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on blank username', function () {
            logic.login('       \t\n', '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (object)', function () {
            logic.login({}, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (numeric)', function () {
            logic.login(123, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on non-string username (boolean)', function () {
            logic.login(true, '123',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid username');
                }
            );
        });

        it('should fail on wrong password', function () {
            logic.login('jd', '12x3',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('wrong credentials');
                }
            );
        });

        it('should fail on undefined password', function () {
            logic.login('jd', undefined,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on null password', function () {
            logic.login('jd', null,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on empty password', function () {
            logic.login('jd', '',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on blank password', function () {
            logic.login('jd', '          ',
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (object)', function () {
            logic.login('jd', {},
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (numeric)', function () {
            logic.login('jd', 124,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        it('should fail on non-string password (boolean)', function () {
            logic.login('jd', true,
                function () {
                    throw Error();
                },
                function (message) {
                    expect(message).toEqual('invalid password');
                }
            );
        });

        // TODO implement analog cases for password

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

        it('should throw error on null success callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    null,
                    function (message) {
                        throw Error(message);
                    }
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on string callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    'test',
                    function (message) {
                        throw Error(message);
                    }
                );
            }).toThrowError(TypeError, 'test is not a function');
        });

        it('should throw error on boolean callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    true,
                    function (message) {
                        throw Error(message);
                    }
                );
            }).toThrowError(TypeError, 'true is not a function');
        });

        it('should throw error on undefined success callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    function (message) {
                        throw Error(message);
                    }, undefined);
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null success callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    function (message) {
                        throw Error(message);
                    }, null);
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on string callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    function (message) {
                        throw Error(message);
                    }, 'test');
            }).toThrowError(TypeError, 'test is not a function');
        });

        it('should throw error on boolean callback', function () {
            expect(function () {
                logic.login('John', 'Doe',
                    function (message) {
                        throw Error(message);
                    }, true);
            }).toThrowError(TypeError, 'true is not a function');
        });

        // TODO end other cases for success callback

        // TODO implement analog cases for fail callback
    });
});