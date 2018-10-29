// safe-box.js

var safeBox = {
    saveSecret: function(secret, password) {
console.log("no me times");
debugger;
console.log("me has timado");
        (function(){
console.log("b");
            var password = this.password
            var secret = this.secret;
        })()
    },
    retrieveSecret: function(password) {
           return safeBox.secret;
       console.log("d");
        
    }
}
