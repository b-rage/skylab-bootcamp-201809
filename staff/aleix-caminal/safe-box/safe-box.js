// safe-box.js

function safeBoxHandler() {
    var _secret;
    var _password;
    var safeBox = {
        saveSecret: function (secret, password) {
            if (!password || !password.trim().length) throw Error('invalid password');
            _secret = secret;
            _password = password;
        },

        retrieveSecret: function (password) {
            if (password === _password) {
                return _secret;
            }
        },
    };
    return safeBox;
}

var safeBox = safeBoxHandler();
