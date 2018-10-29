var panel = new Panel('hola mundo', 'section');


var dialog = new Dialog('hola mundo', 'lorem ipsum ...', 'section');


var alert = new Alert('Achtung!', 'Schade! ...', 'section', function() {
    console.log('Achtung accepted');
});



var error = new Alert('Error!', 'Schade! ...', 'section', function() {
    console.log('Error accepted');
}, true);



var confirm = new Confirm('Do you want to proceed?', 'Please, review the contract before accepting...', 'section', function() {
    console.log('confirm accepted');
}, function() {
    console.log('confirm denied');
});

