var landing = new Landing('Choose an option', 'section',
    function() {
        landing.hide();
        register.show();
    },
    function() {
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element);

var login = new Login('Login', 'section', function(username, password) {
    
    logic.login(username, password, function(user){

        login.hide();
        welcome.title.innerText = 'Welcome, ' + user.name + '!';
        welcome.show();

    }, 
    function(message){
        alert(message);
    });
}, function(){
    login.hide();
    landing.show();
});

document.body.appendChild(login.element);


var register = new Register('Register', 'section', function(name, email, username, password) {
    
    logic.register(name, email, username, password, function(){
        register.hide();
        login.show();
    }, 
    function(message){
        alert(message);
    });
}, function() {
    register.hide();
    landing.show();
});

document.body.appendChild(register.element);

var welcome = new Welcome('Welcome', 'section', function() {
    welcome.hide();
    landing.show();
});

document.body.appendChild(welcome.element);
