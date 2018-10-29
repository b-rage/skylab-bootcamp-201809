var user;

var logic = {
    register: function (name, surname, username, password, onSuccess, onFail) {
        if (typeof name !== 'string' || !name || !name.trim().length) onFail('invalid name');
        else if (typeof surname !== 'string' || !surname || !surname.trim().length) onFail('invalid surname');
        else if (typeof username !== 'string' || !username || !username.trim().length) onFail('invalid username');
        else if (typeof password !== 'string' || !password || !password.trim().length) onFail('invalid password');
        else if (typeof onSuccess !== 'function') throw TypeError (onSuccess + ' is not a function')
        else if (typeof onFail !== 'function') throw TypeError (onFail + ' is not a function')
        
        else {
            user = {
                name: name,
                surname: surname,
                username: username,
                password: password
            };

            onSuccess();
        }
    },

    login: function (username, password, onSuccess, onFail) {
        if (typeof username !== 'string' || !username || !username.trim().length) onFail('invalid username');
        else if (typeof password !== 'string' || !password || !password.trim().length) onFail('invalid password');
        else if (typeof onSuccess !== 'function') throw TypeError(onSuccess + ' is not a function');
        else if (typeof onFail !== 'function') throw TypeError(onFail + ' is not a function');
        else if (user) {
            if (user.username === username && user.password === password) {
                onSuccess({
                    name: user.name,
                    surname: user.surname,
                    username: user.username
                });
            }
            else onFail('wrong credentials!');
        }
    }
};