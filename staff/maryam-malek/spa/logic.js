var user;

var logic = {
    login: function(username, password, onSuccess, onFail){
        if (typeof username != 'string' || !username || !username.trim().length) onFail('invalid username');
        else if (typeof password != 'string' || !password || !password.trim().length) onFail('invalid password');
        else if (typeof onSuccess !== 'function') throw TypeError (onSuccess + ' is not a function');
        else if (typeof onFail !== 'function') throw TypeError (onFail + ' is not a function');
        else if (user) {
            if (user.username === username && user.password === password) {
               // onSuccess(user);//Aquí no hauria d'enviar user, sinó una còpia de user sense el password
                onSuccess({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                });
            }
            else onFail('wrong credentials!');
        }
    },
    register: function(name, email, username, password, onSuccess, onFail){
        if (typeof name != 'string' || !name || !name.trim().length) onFail('invalid name');
        else if (typeof username != 'string' || !username || !username.trim().length) onFail('invalid username');
        else if (typeof email != 'string' || !email || !email.trim().length) onFail('invalid email');
        else if (typeof password != 'string' || !password || !password.trim().length) onFail('invalid password');//find aquí són validacions funcionals. Les altres dues són validacions tècniques, pel dev
        else if (typeof onSuccess !== 'function') throw TypeError (onSuccess + ' is not a function');
        else if (typeof onFail !== 'function') throw TypeError (onFail + ' is not a function');
        else {
            user = {
                name: name,
                email: email,
                username: username,
                password: password
            };
            onSuccess();
        }
    }

};