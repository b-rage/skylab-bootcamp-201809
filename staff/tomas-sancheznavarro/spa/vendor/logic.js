var user;

var logic = {
    register: function (name, surname, username, password, onSuccess, onFail) {
        if (!name || !name.trim().length) alert('invalid name');
        else if (!surname || !surname.trim().length) alert('invalid surname');
        else if (!username || !username.trim().length) alert('invalid username');
        else if (!password || !password.trim().length) alert('invalid password');
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
        if (!username || !username.trim().length) onFail('invalid username');
        else if (!password || !password.trim().length) onFail('invalid password');
        else if (user) {
            if (user.username === username && user.password === password) {
                onSuccess(user);
            } else onFail('wrong credentials!');
        }
    }
};