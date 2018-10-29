var user, safeBox;
(function() {
    _users = [];

    safeBox = {
        saveUser: function (name, username, password) {
            _users.push({
                name: name,
                username: username,
                password: password
            });
        },

        retrieveUser: function (username, password) {
            return _users.find(function (user) {
                return user.username === username && user.password === password;
            });
        },
    };
})();

var logic = {
    register: function(form, callback) {
        if (typeof form !== 'object' || $(form).prop("tagName") !== 'FORM') throw Error('no form passed as argument');
        if (typeof callback !== 'function') throw Error('callback is not a function');

        if (this.validate(form, ['name', 'username', 'password', 'confirm_password'])) {
            if ($('#password').val() === $('#confirm_password').val()) {
                safeBox.saveUser(
                    $('#name').val(),
                    $('#username').val(),
                    $('#password').val()
                );

                callback();
            } else {
                this.error('Passwords do not match');
            }
        } else {
            this.error('Fields in red are mandatory');
        }
    },

    login: function(form, callback) {
        if (typeof form !== 'object' || $(form).prop("tagName") !== 'FORM') throw Error('no form passed as argument');
        if (typeof callback !== 'function') throw Error('callback is not a function');

        if (user = safeBox.retrieveUser($('#username').val(), $('#password').val())) {
            callback();
        } else {
            this.error('Your credentials are invalid');
        }
    },

    logout: function(callback) {
        if (typeof callback !== 'function') throw Error('callback is not a function');
        user = undefined;
        callback();
    },

    validate: function(form, inputs) {
        if (typeof form !== 'object' || $(form).prop("tagName") !== 'FORM') throw Error('no form passed as argument');
        if (!$.isArray(inputs) || inputs.length < 1) throw Error('array is not valid');

        var result = 1;
        $.each(inputs, function(i, input) {
            if (!$('#' + input).val()) {
                $('#' + input).addClass('is-invalid');
                result = 0;
            } else {
                $('#' + input).removeClass('is-invalid');
            }
        });

        return result;
    },

    error: function(message) {
        if (!message) throw Error('message is not valid');

        alert(message);
    }
};
