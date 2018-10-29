// TODO
describe('Logic', function () {
    var name = '';
    var surname = '';
    var username = '';
    var password = '';
    var repeatPass = '';

    beforeEach(function () {
        name = 'sergio';
        surname = 'luz';
        username = 'slf';
        password = 'olalaolala';
        repeatPass = 'olalaolala';
    });

    describe('Save data in safeBox', function () {

        it('Data should be set', function () {

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                expect(msg).toEqual(true);
            }, function (arr) {
                throw Error(arr[0]);
            });
        })

        it('Must return error messages when has an error', function () {

            safeBox.saveData('1', '', '-', 'a', 'b',
                function (msg) {
                    throw Error('SaveData is saving wrong data');
                },
                function (arr) {
                    expect(arr[0]).toEqual('Password must be set and it has to have a minum of 8 characters');
                });
        })

        it('Should fail when no-name', function () {
            name = undefined;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error('Should fail when no-name');
            }, function (arr) {
                expect(arr[0]).toEqual('undefined is not a valid name');
            });
        })

        it('Should fail when name is a number', function () {
            name = '90';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your name can not contain numbers');
            });
        })

        it('Should fail when name contains symbols', function () {
            name = 'sergio!';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your name can not contain symbols');
            });
        })

        it('Should fail when name is null', function () {
            name = null;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('null is not a valid name');
            });
        })

        it('Should fail when name is empty', function () {
            name = '';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Name must be set');
            });
        })

        it('Should fail when name is blank', function () {
            name = '          ';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Name must be set');
            });
        })

        it('Should fail when name is an object', function () {
            name = {
                ob: 'ject'
            };

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('[object Object] is not a valid name');
            });
        })

        it('Should fail when name is an array', function () {
            name = [1, 2];

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('1,2 is not a valid name');
            });
        })

        it('Should fail when name is a boolean', function () {
            name = true;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('true is not a valid name');
            });
        })

        it('Should fail when no-surname', function () {
            surname = undefined;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('undefined is not a valid surname');
            });
        })

        it('Should fail when surname is a number', function () {
            surname = '90';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your surname can not contain numbers');
            });
        })

        it('Should fail when surname contains symbols', function () {
            surname = 'sergio!';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your surname can not contain symbols');
            });
        })

        it('Should fail when surname is null', function () {
            surname = null;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('null is not a valid surname');
            });
        })

        it('Should fail when surname is empty', function () {
            surname = '';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Surname must be set');
            });
        })

        it('Should fail when surname is blank', function () {
            surname = '          ';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Surname must be set');
            });
        })

        it('Should fail when surname is an object', function () {
            surname = {
                ob: 'ject'
            };

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('[object Object] is not a valid surname');
            });
        })

        it('Should fail when surname is an array', function () {
            surname = [1, 2];

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('1,2 is not a valid surname');
            });
        })

        it('Should fail when surname is a boolean', function () {
            surname = true;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('true is not a valid surname');
            });
        })

        it('Should fail when no-username', function () {
            username = undefined;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('undefined is not a valid username');
            });
        })

        it('Should fail when username is a number', function () {
            username = '90';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your username can not contain numbers');
            });
        })

        it('Should fail when username contains symbols', function () {
            username = 'sergio!';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your username can not contain symbols');
            });
        })

        it('Should fail when username is null', function () {
            username = null;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('null is not a valid username');
            });
        })

        it('Should fail when username is empty', function () {
            username = '';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Username must be set');
            });
        })

        it('Should fail when username is blank', function () {
            username = '          ';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Username must be set');
            });
        })

        it('Should fail when username is an object', function () {
            username = {
                ob: 'ject'
            };

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('[object Object] is not a valid username');
            });
        })

        it('Should fail when username is an array', function () {
            username = [1, 2];

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('1,2 is not a valid username');
            });
        })

        it('Should fail when username is an array', function () {
            username = true;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('true is not a valid username');
            });
        })
        // undefined, number, symbols, null, empty, blank, object, array, boolean

        it('Should fail when password is a number', function () {
            password = '90000000000';
            repeatPass = '90000000000';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your password can not contain numbers');
            });
        })

        it('Should fail when password has less than 8 characters', function () {
            password = 'hola';
            repeatPass = 'hola';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Password must be set and it has to have a minum of 8 characters');
            });
        })

        it('Should fail when no-password', function () {
            password = undefined;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('undefined is not a valid password');
            });
        })

        it('Should fail when password is a number', function () {
            password = '9000000000000';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your password can not contain numbers');
            });
        })

        it('Should fail when password contains symbols', function () {
            password = 'sergio!';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Password must be set and it has to have a minum of 8 characters');
            });
        })

        it('Should fail when password is null', function () {
            password = null;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('null is not a valid password');
            });
        })

        it('Should fail when password is empty', function () {
            password = '';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Password must be set and it has to have a minum of 8 characters');
            });
        })

        it('Should fail when password is blank', function () {
            password = '          ';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Password must be set and it has to have a minum of 8 characters');
            });
        })

        it('Should fail when password is an object', function () {
            password = {
                ob: 'ject'
            };

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('[object Object] is not a valid password');
            });
        })

        it('Should fail when password is an array', function () {
            password = [1, 2];

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('1,2 is not a valid password');
            });
        })

        it('Should fail when password is a boolean', function () {
            password = true;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('true is not a valid password');
            });
        })

        it('Should fail when no-repeatPassword', function () {
            repeatPass = undefined;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('undefined is not a valid password');
            });
        })

        it('Should fail when Repeatpassword has less than 8 characters', function () {
            password = 'hola';
            repeatPass = 'hola';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Password must be set and it has to have a minum of 8 characters');
            });
        })

        it('Should fail when passwords are not equal', function () {
            repeatPass = 'holaholahola';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Password must be the same in both fields');
            });
        })

        it('Should fail when Repeatpassword is a number', function () {
            password = '90000000000';
            repeatPass = '90000000000';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your password can not contain numbers');
            });
        })

        it('Should fail when password has less than 8 characters', function () {
            password = 'hola';
            repeatPass = 'hola';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Password must be set and it has to have a minum of 8 characters');
            });
        })

        it('Should fail when no-password', function () {
            repeatPass = undefined;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('undefined is not a valid password');
            });
        });

        it('Should fail when Repeatpassword is a number', function () {
            repeatPass = '9000000000000';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Your password can not contain numbers');
            });
        });

        it('Should fail when Repeatpassword contains symbols', function () {
            repeatPass = 'sergio!';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Repeat the password please. Remeber it has to have a minum of 8 characters');
            });
        });

        it('Should fail when Repeatpassword is null', function () {
            repeatPass = null;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('null is not a valid password');
            });
        });

        it('Should fail when Repeatpassword is empty', function () {
            repeatPass = '';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Repeat the password please. Remeber it has to have a minum of 8 characters');
            });
        });

        it('Should fail when Repeatpassword is blank', function () {
            repeatPass = '          ';

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('Repeat the password please. Remeber it has to have a minum of 8 characters');
            });
        });

        it('Should fail when Repeatpassword is an object', function () {
            repeatPass = {
                ob: 'ject'
            };

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('[object Object] is not a valid password');
            });
        });

        it('Should fail when Repeatpassword is an array', function () {
            repeatPass = [1, 2];

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('1,2 is not a valid password');
            });
        });

        it('Should fail when RepeatPassword is a boolean', function () {
            repeatPass = true;

            safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {
                throw Error();
            }, function (arr) {
                expect(arr[0]).toEqual('true is not a valid password');
            });
        });

        it('Should fail when no-onSuccess', function () {
            expect(function () {
                safeBox.saveData(name, surname, username, password, repeatPass, undefined, function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess is a number', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, 12, function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess contains symbols', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, '--', function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess is null', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, null, function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess is empty', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, '', function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess is blank', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, '   ', function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess is an object', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, {
                    ob: 'ject'
                }, function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess is an array', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, [1, 3], function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when onSuccess is a boolean', function () {
            expect(function () {
                safeBox.saveData(name, surname, username, password, repeatPass, true, function (arr) {
                    throw Error();
                });
            }).toThrowError(TypeError, 'onSuccess is not a function');
        });

        it('Should fail when no-onFail', function () {
            expect(function () {
                safeBox.saveData(name, surname, username, password, repeatPass, function () {
                    throw Error();
                }, undefined).toThrowError(TypeError, 'onFail is not a function');
            });
        });


        it('Should fail when onFail is a number', function () {
            expect(function () {
                safeBox.saveData(name, surname, username, password, repeatPass, function () {
                    throw Error();
                }, 12).toThrowError(TypeError, 'onFail is not a function');
            });
        });

        it('Should fail when onFail contains symbols', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, function () {
                    throw Error();
                }, '--').toThrowError(TypeError, 'onFail is not a function');
            });
        });

        it('Should fail when onFail is null', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, function () {
                    throw Error();
                }, null).toThrowError(TypeError, 'onFail is not a function');
            });
        });

        it('Should fail when onFail is empty', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, function (arr) {
                    throw Error();
                }, '').toThrowError(TypeError, 'onFail is not a function');
            });
        });

        it('Should fail when onFail is blank', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, function (arr) {
                    throw Error();
                }, '   ').toThrowError(TypeError, 'onFail is not a function');
            });
        });

        it('Should fail when onFail is an object', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, function () {
                    throw Error();
                }, {
                    ob: 'ject'
                }).toThrowError(TypeError, 'onFail is not a function');
            });
        });

        it('Should fail when onFail is an array', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, function () {
                    throw Error();
                }, [1, 3]).toThrowError(TypeError, 'onFail is not a function');
            });
        });

        it('Should fail when onFail is a boolean', function () {
            expect(function () {

                safeBox.saveData(name, surname, username, password, repeatPass, function () {
                    throw Error();
                }, true).toThrowError(TypeError, 'onFail is not a function');
            });
        });

        describe('Retrieve data of safeBox', function () {

            it('Data should be retrieved successfully', function () {
                safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {}, function (arr) {});

                safeBox.checkData(password, username, function (_name, _surname, _username) {
                    expect(_name).toEqual('sergio');
                    expect(_surname).toEqual('luz');
                    expect(_username).toEqual('slf');
                }, function (arr) {
                    throw Error();
                });
            });

            it('Should fail if name does not match the one saved', function () {
                safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {}, function (arr) {});
                safeBox.checkData(password, username, function (_name, _surname, _username) {
                    expect(_name).toEqual(name);
                }, function (arr) {
                    throw Error();
                });

            });

            it('Should fail if surname does not match the one saved', function () {
                safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {}, function (arr) {});
                safeBox.checkData(password, username, function (_name, _surname, _username) {
                    expect(_surname).toEqual(surname);
                }, function (arr) {
                    throw Error();
                });

            });

            it('Should fail if username does not match the one saved', function () {
                safeBox.saveData(name, surname, username, password, repeatPass, function (msg) {}, function (arr) {});
                safeBox.checkData(password, username,
                    function (_name, _surname, _username) {
                        expect(_username).toEqual(username);
                    },
                    function (arr) {
                        throw Error();
                    });

            });
        });
    });
});

// FALTA MODIFICAR EL ARCHIVO MAIN PARA ADAPTARLO