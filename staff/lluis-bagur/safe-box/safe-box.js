// safe-box.js

(function(){
    var _password;
    var _secret;

    var safeBox = {
        saveSecret: function(secret, password) {
            
            if (typeof secret !== 'string') throw Error ('invalid secret.');

            if (!secret.length) throw Error ('invalid secret.');

            if (!secret.trim().length) throw Error ('invalid secret.');

            if (typeof password !== 'string') throw Error ('invalid pass.');
            
            if (!password.length) throw Error ('invalid pass.');

            if (!password.trim().length) throw Error ('invalid pass.');
        

            _secret = secret;
            _password = password;
        },

        retrieveSecret: function(password){
            if (password !== _password) throw Error ('invalid pass.');
            return _secret;
        }
    };
});