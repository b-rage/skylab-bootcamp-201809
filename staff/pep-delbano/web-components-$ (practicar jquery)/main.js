var panel = new Panel('hola mundo', 'section');

$('body').append(panel.element);

var dialog = new Dialog('hola mundo', 'lorem ipsum ...', 'section');

$('body').append(dialog.element);

var alert = new Alert('Achtung!', 'Schade! ...', 'section', function() {
    console.log('Achtung accepted');
});

$('body').append(alert.element);

var error = new Alert('Error!', 'Schade! ...', 'section', function() {
    console.log('Error accepted');
}, true);

$('body').append(error.element);

var confirm = new Confirm('Do you want to proceed?', 'Please, review the contract before accepting...', 'section', function() {
    console.log('confirm accepted');
}, function() {
    console.log('confirm denied');
});

$('body').append(confirm.element);