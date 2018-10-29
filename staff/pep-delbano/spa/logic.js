var user;



var logic = {
    register: function (name, lname, pc, usern, pass, confirmpass, onSuccess, onFail) { //saveDataCallback
        //functional validation (for the client: 'you need to fill the fields correctly)
        if (typeof name !== 'string' || !name || !name.trim().length) onFail('invalid first name');
        else if (typeof name !== 'string' || !lname || !lname.trim().length) onFail('invalid last name');
        else if (typeof usern !== 'string' || !usern || !usern.trim().length) onFail('invalid username');
        else if (typeof pass !== 'string' || !pass || !pass.trim().length) onFail('invalid password');
        else if (typeof confirmpass !== 'string' || !confirmpass || !confirmpass.trim().length) onFail('confirm password please');
        //technical validation (for the programmer: 'you need to send a function to make it work)
        else if (typeof onSuccess !== 'function') throw Error(onSuccess + 'is not a function');
        else if (typeof onFail !== 'function') throw Error(onFail + 'is not a function');
        else { //fields filled, then = save all fields in global scope var 'user':
            user = {
                name: name,
                lname: lname,
                pc: pc,
                usern: usern,
                pass: pass,
                confirmpass: confirmpass
            };
            //and once saved data into var user, call the function

            onSuccess();
        }
    },

    login: function (username, password, onSuccess, onFail) { //matchCallback
        if (!username || !username.trim().length) onFail('invalid username');
        else if (!password || !password.trim().length) onFail('invalid password');
        else if (user) { //si ya está creado el usuario ( osea, se ha registrado):
            if (user.usern === username && user.pass === password) {
                onSuccess({ //we don't need the password to be sent anywhere, as it'd be exposed to be stolen
                    name: user.name,
                    lname: user.lname,
                    username: user.username
                });
            }
            else onFail('wrong credentials!');
        }
    }
};