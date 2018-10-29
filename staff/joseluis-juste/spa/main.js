var service = factoryService();
var landing = new Landing("¡¡¡Welcome to WebComponents!!!", "section", function () {


    var register = new Register("form", function (firstname,lastname,username, password) {

        service.setUserData(firstname,lastname,username, password, function(){
            register.hide();
            landing.show();
       },function(message){
            var error = new Alert("¡¡¡ERROR!!!", message,"section", function () {
                error.hide();
                register.show();

            }, true)
            register.hide();
            error.show();
            error.render(document.body);
       });
      
    },function(){

        register.hide();
        landing.show();
    });
    register.render(document.body);
    register.show();
    landing.hide();

}, function () {

    var login = new Login("LOGIN", "form", function (username, password) {

        service.login(username, password, function(){

            var welcome = new Alert("¡¡¡WELCOME!!!", "Bienvenido a los Web Components", "section", function () {

                welcome.hide();
                login.hide();
                landing.show();

            });
            welcome.render(document.body);
            welcome.show();
            login.hide();

        }, function(message){

            var error = new Alert("¡¡¡ERROR!!!", message, "section", function () {
                error.hide();
                login.show();

            }, true)
            error.show();
            error.render(document.body);
            login.hide();
        });
        
    }, function () {
        login.hide();
        landing.show();
    });
    login.render(document.body);
    login.show();
    landing.hide();

});

landing.render(document.body);