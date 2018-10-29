var panel = new Panel('hola mundo', 'section');

panel.element.appendTo('body');

var dialog = new Dialog('hola mundo', 'lorem ipsum ...', 'section');

dialog.element.appendTo('body');

var alert = new Alert('Achtung!', 'Schade! ...', 'section', function() {
    console.log('Achtung accepted');
});

alert.element.appendTo('body');

var error = new Alert('Error!', 'Schade! ...', 'section', function() {
    console.log('Error accepted');
}, true);

error.element.appendTo('body');

var confirm = new Confirm('Do you want to proceed?', 'Please, review the contract before accepting...', 'section', function() {
    console.log('confirm accepted');
}, function() {
    console.log('confirm denied');
});

confirm.element.appendTo('body');