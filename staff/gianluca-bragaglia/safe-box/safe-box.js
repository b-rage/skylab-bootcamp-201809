// safe-box.js

var safeBox = {
    saveSecret: function(secret, password) {

        function safe() {
            var secret = this.secret;
            var password = this.password;
            var datos = {
                sec: secret,
                pwr: password
            }

            return datos
        }

    },

    retrieveSecret: function(password) {
        // TODO
    }
}

console.log(safeBox.saveSecret('hola', 'psw'));


