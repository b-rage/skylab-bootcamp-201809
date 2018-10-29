var welcome = new Welcome('Welcome', 'section');

document.body.appendChild(welcome.element);

var landing = new Landing('Choose an option', 'section',
    function() {
        // TODO on register click
        landing.hide();
        register.show();
    },
    function() {
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element);

var login = new Login('Login', 'section',
    function(){
        var user = document.getElementsByName("input1")[0].value;
        var pass = document.getElementsByName("input2")[0].value;
        var message = document.getElementsByTagName('p')[0];
        var usercheck = safeBox.retrieveSecret(pass);
        if(usercheck===user){
            login.hide();
            welcome.show();
            }
        else{
            message.innerHTML = 'User or password incorrect';
            throw Error ('User or password incorrect');
        }
    });

document.body.appendChild(login.element);

var register = new Register('Register', 'section', 
    function(){
        
        var user = document.getElementsByName("userreg")[0].value;
        var pass = document.getElementsByName("passreg")[0].value;
        var message = document.getElementsByTagName('p')[3];
                
        if (!isNaN(user)){
            message.innerHTML = 'User must be a string!!';
            throw Error ('User must be a string name');
        }
        safeBox.saveSecret(user,pass);
        register.hide();
        login.show();
    }, function(message){
            alert(message);

    },  function (){
        login.hide();
        landing.show();
    });

document.body.appendChild(register.element);


