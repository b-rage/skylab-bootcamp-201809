var user;

var logic = {
    register: function (name, surname, username, password, onSuccess, onFail) {
        if (!name || !name.trim().length) onFail('invalid name');
        else if (!surname || !surname.trim().length) onFail('invalid surname');
        else if (!username || !username.trim().length) onFail('invalid username');
        else if (!password || !password.trim().length) onFail('invalid password');
        if(typeof onSuccess !== 'function'){throw Error (onSuccess + ' is not a function');}
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
        if (typeof user !== 'string' || !username || !username.trim().length) onFail('invalid username');
        else if (typeof password !== 'string' || !password || !password.trim().length) onFail('invalid password');
        else if (user) {
            if (user.username === username && user.password === password) {
                // onSuccess(user); //it's safer to not send back the whole user object (it contains the password)
                //Therefore, we should send a new object which contains some of the properties of User:
                onSuccess({
                    name: user.name,
                    surname: user.surname
                });
            }
            else onFail('wrong credentials');
        }
    }
};