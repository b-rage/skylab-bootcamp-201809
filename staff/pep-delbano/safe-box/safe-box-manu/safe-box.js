// safe-box.js

//with this function, we can save 
var safeBox = {
    saveSecret: function(secret, password) {
        this.sec = secret;
        this.pass = password;
        


    },

    retrieveSecret: function(password) {
        if(password === saveSecret.pass) {
        return this.saveSecret.sec;
    }
}


