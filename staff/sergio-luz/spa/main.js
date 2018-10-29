// 
// LOGICA DE PRESENTACION DE LA PANTALLA: LANDING 
// 

var landing = new Landing('Choose an option', 'section',
    function () {
        landing.hide();
        register.show();
    },
    function () {
        landing.hide();
        login.show();
    });
document.body.appendChild(landing.element);

// 
// LOGICA DE PRESENTACION DE LA PANTALLA: REGISTER 
// 

var register_errors = [];

var register = new Register('Register', 'section', function () {
    var name = document.getElementsByName("_name")[0].value;
    var surname = document.getElementsByName("_surname")[0].value;
    var username = document.getElementsByName("_username")[0].value;
    var password = document.getElementsByName("_password")[0].value;
    var repeatPass = document.getElementsByName("_repeatPass")[0].value;

    console.log(name, surname, username, password, repeatPass);
    safeBox.saveData(name, surname, username, password, repeatPass, function () {
        if (register_errors.length) {
            register_errors.forEach(n => {
                document.body.removeChild(n.element);
            });
        }
        register.hide();
        login.show();
    }, function (result) {
        if (register_errors.length) {
            register_errors.forEach(n => {
                document.body.removeChild(n.element);
            });
        }
        for (let index = 0; index < result.length; index++) {
            register_errors[index] = new Register_Errors('div');
            register_errors[index].message.innerText = result[index];
            document.body.appendChild(register_errors[index].element);
            console.log(register_errors);
        }
    });
});
document.body.appendChild(register.element);

// 
// LOGICA DE PRESENTACION DE LA PANTALLA: LOGIN 
// 

var login = new Login('Login', 'section', function () {

    var username = document.getElementsByName("confirm_username")[0].value;
    var password = document.getElementsByName("confirm_password")[0].value;

    safeBox.checkData(password, username, function(){}, function(){});
    safeBox.checkData(password, username, function(){
        login.hide();
        welcome.show();
        login_errors.hide();
    }, function (arr){
        login_errors.show();
        login.hide();
    });
});
document.body.appendChild(login.element);


var login_errors = new Login_Errors('Error', 'section', function () {
    login_errors.hide();
    login.show();
});
document.body.appendChild(login_errors.element);

// 
// LOGICA DE PRESENTACION DE LA PANTALLA: WELCOME 
// 

var welcome = new Welcome('Welcome!', 'section', function () {
    welcome.hide();
    landing.show();
});
document.body.appendChild(welcome.element);